// Genera los PDF del CV a partir de los markdown de public/cv usando Chrome headless.
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const CVS = [
  {
    id: 'es',
    lang: 'es',
    compact: true,
    src: 'public/cv/cv-es-1p.md',
    out: 'public/cv/Eliezer_Rojas_Developer_CV.pdf',
  },
  {
    id: 'en',
    lang: 'en',
    compact: true,
    src: 'public/cv/cv-en-1p.md',
    out: 'public/cv/Eliezer_Rojas_Developer_CV_EN.pdf',
  },
];

const TMP_DIR = '.cache/cv';

/** Chrome se usa solo como motor de impresion: sin JS ni red, el HTML es autocontenido. */
const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean);

function resolveChrome() {
  const binary = CHROME_CANDIDATES.find((candidate) => existsSync(candidate));
  if (!binary) {
    throw new Error('No se encontro Chrome/Chromium. Define CHROME_PATH con la ruta al binario.');
  }
  return binary;
}

const escapeHtml = (text) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function inline(text) {
  return escapeHtml(text)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

/**
 * Subconjunto de markdown suficiente para estos CV: encabezados, parrafos,
 * listas y enfasis/enlaces en linea. Un parrafo que va todo en cursiva se trata
 * como metadato de la entrada (fechas, rol, enlaces al repo).
 */
function toBlocks(markdown) {
  const blocks = [];
  let paragraph = [];
  let items = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    const text = paragraph.join(' ');
    paragraph = [];
    const meta = text.match(/^\*([^*].*)\*$/);
    blocks.push(
      meta
        ? { tag: 'meta', html: `<p class="meta">${inline(meta[1])}</p>` }
        : { tag: 'p', html: `<p>${inline(text)}</p>` },
    );
  };

  const flushList = () => {
    if (!items.length) return;
    const list = items.map((item) => `<li>${inline(item)}</li>`).join('');
    items = [];
    blocks.push({ tag: 'ul', html: `<ul>${list}</ul>` });
  };

  for (const rawLine of markdown.replace(/\r\n/g, '\n').split('\n')) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    const heading = line.match(/^(#{1,3})\s+(.*)$/);
    if (heading) {
      flushParagraph();
      flushList();
      const level = heading[1].length;
      blocks.push({ tag: `h${level}`, html: `<h${level}>${inline(heading[2])}</h${level}>` });
      continue;
    }

    if (line.startsWith('- ')) {
      flushParagraph();
      items.push(line.slice(2));
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  return blocks;
}

/** Titulos de la seccion donde el cargo va en h3 y la fecha en cursiva al final. */
function isExperienceSection(titleHtml) {
  const title = titleHtml
    .replace(/<[^>]+>/g, '')
    .trim()
    .toLowerCase();
  return title === 'experiencia profesional' || title === 'professional experience';
}

/** Agrupa cada `h3` con su contenido para que el salto de pagina no lo parta. */
function groupEntries(blocks) {
  const output = [];
  let entry = null;

  const closeEntry = () => {
    if (!entry) return;
    output.push(`<section class="entry">${entry.join('')}</section>`);
    entry = null;
  };

  for (const block of blocks) {
    if (block.tag === 'h3') {
      closeEntry();
      entry = [block.html];
    } else if (block.tag === 'h1' || block.tag === 'h2') {
      closeEntry();
      output.push(block.html);
    } else if (entry) {
      entry.push(block.html);
    } else {
      output.push(block.html);
    }
  }

  closeEntry();
  return output.join('\n');
}

/** Envuelve la experiencia laboral para estilar fechas en cursiva dentro del h3. */
function assembleBody(blocks) {
  const output = [];
  let i = 0;

  while (i < blocks.length) {
    const block = blocks[i];

    if (block.tag === 'h2') {
      output.push(block.html);
      i++;
      const sectionBlocks = [];
      while (i < blocks.length && blocks[i].tag !== 'h2') {
        sectionBlocks.push(blocks[i]);
        i++;
      }
      const grouped = groupEntries(sectionBlocks);
      output.push(
        isExperienceSection(block.html)
          ? `<section class="experience">\n${grouped}\n</section>`
          : grouped,
      );
      continue;
    }

    const sectionBlocks = [];
    while (i < blocks.length && blocks[i].tag !== 'h2') {
      sectionBlocks.push(blocks[i]);
      i++;
    }
    output.push(groupEntries(sectionBlocks));
  }

  return output.join('\n');
}

async function buildHtml({ lang, body, title, compact = false }) {
  const pageMargin = compact ? '9mm 12mm 9mm' : '12mm 14mm 13mm';
  const fontSize = compact ? '8.8pt' : '9.4pt';
  const lineHeight = compact ? '1.28' : '1.4';
  const h2Margin = compact ? '7pt 0 3pt' : '13pt 0 5pt';
  const h3Margin = compact ? '3.5pt 0 0.5pt' : '7pt 0 1pt';
  const pMargin = compact ? '0 0 2pt' : '0 0 3.5pt';
  const ulMargin = compact ? '0 0 1.5pt' : '1pt 0 4pt';
  const liMargin = compact ? '0.5pt' : '1.5pt';

  return `<!doctype html>
<html lang="${lang}">
  <head>
    <meta charset="utf-8" />
    <title>${escapeHtml(title)}</title>
    <style>
      @page {
        size: A4;
        margin: ${pageMargin};
      }

      html {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }

      body {
        margin: 0;
        font-family: Helvetica, Arial, sans-serif;
        font-size: ${fontSize};
        line-height: ${lineHeight};
        color: #1c1c1e;
      }

      a {
        color: #b8410f;
        text-decoration: none;
      }

      h1 {
        margin: 0 0 3pt;
        font-size: 21pt;
        line-height: 1.1;
        letter-spacing: -0.01em;
      }

      h1 + p {
        margin: 0 0 2pt;
        font-size: 9.6pt;
        color: #2f2f31;
      }

      h1 + p + p {
        margin: 0;
        font-size: 8.8pt;
        color: #55555a;
      }

      h2 {
        margin: ${h2Margin};
        padding-bottom: 2pt;
        border-bottom: 0.7pt solid #d8d8dc;
        font-size: 9.6pt;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: #b8410f;
        break-after: avoid;
      }

      h3 {
        margin: ${h3Margin};
        font-size: 10.4pt;
        break-after: avoid;
      }

      /* El titulo de la entrada se ve igual tenga enlace o no. */
      h3 a {
        color: inherit;
      }

      /* Solo experiencia: fecha en la misma linea que el cargo, estilo meta. */
      .experience h3 em {
        font-size: 8.6pt;
        color: #55555a;
        font-weight: normal;
      }

      p {
        margin: ${pMargin};
      }

      p.meta {
        margin: 0 0 3pt;
        font-size: 8.6pt;
        color: #55555a;
      }

      ul {
        margin: ${ulMargin};
        padding-left: 11pt;
      }

      li {
        margin-bottom: ${liMargin};
      }

      code {
        padding: 0.5pt 2pt;
        border-radius: 2pt;
        background: #f1f1f3;
        font-family: 'SFMono-Regular', Menlo, Consolas, monospace;
        font-size: 8.4pt;
      }

      strong {
        font-weight: bold;
      }

      .entry {
        break-inside: avoid;
      }
    </style>
  </head>
  <body>
${body}
  </body>
</html>
`;
}

const sleep = (ms) => new Promise((done) => setTimeout(done, ms));

/** Listo cuando el archivo existe y deja de crecer en dos lecturas seguidas. */
async function waitForPdf(path, { timeoutMs = 60_000, pollMs = 200 } = {}) {
  const deadline = Date.now() + timeoutMs;
  let previous = -1;

  while (Date.now() < deadline) {
    await sleep(pollMs);
    const size = await stat(path).then(
      ({ size }) => size,
      () => -1,
    );
    if (size > 0 && size === previous) return size;
    previous = size;
  }

  throw new Error(`Chrome no genero ${path} en ${timeoutMs / 1000}s.`);
}

/**
 * El headless nuevo de Chrome escribe el PDF pero no siempre termina el proceso,
 * asi que se espera el archivo y se cierra el navegador a mano.
 */
async function printToPdf(chrome, args, outPath) {
  await rm(outPath, { force: true });

  const child = spawn(chrome, args, { stdio: 'ignore' });
  const exited = new Promise((done) => child.once('exit', done));

  try {
    return await Promise.race([
      waitForPdf(outPath),
      exited.then(() => stat(outPath).then(({ size }) => size)),
    ]);
  } finally {
    if (child.exitCode === null) child.kill('SIGKILL');
  }
}

async function main() {
  const chrome = resolveChrome();
  await mkdir(TMP_DIR, { recursive: true });

  for (const { id, lang, compact = false, src, out } of CVS) {
    const markdown = await readFile(src, 'utf8');
    const blocks = toBlocks(markdown);
    const title = blocks.find((block) => block.tag === 'h1')?.html.replace(/<[^>]+>/g, '') ?? 'CV';
    const html = await buildHtml({ lang, body: assembleBody(blocks), title, compact });

    const htmlPath = resolve(TMP_DIR, `cv-${id}.html`);
    const outPath = resolve(out);
    await writeFile(htmlPath, html, 'utf8');

    const size = await printToPdf(
      chrome,
      [
        '--headless=new',
        '--disable-gpu',
        '--no-first-run',
        '--no-default-browser-check',
        `--user-data-dir=${resolve(TMP_DIR, `chrome-profile-${id}`)}`,
        '--no-pdf-header-footer',
        '--virtual-time-budget=2000',
        `--print-to-pdf=${outPath}`,
        pathToFileURL(htmlPath).href,
      ],
      outPath,
    );

    console.log(`${out} (${(size / 1024).toFixed(0)} kB)`);
  }

  await rm(TMP_DIR, { recursive: true, force: true });
}

await main();