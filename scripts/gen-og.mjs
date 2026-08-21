// Genera una imagen Open Graph por defecto (se puede reemplazar por una propia).
import { mkdirSync } from 'node:fs';
import sharp from 'sharp';

mkdirSync('public/og', { recursive: true });

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0f0f11"/>
      <stop offset="1" stop-color="#1a1a1a"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#e95420"/>
      <stop offset="1" stop-color="#ff6b3d"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1050" cy="120" r="220" fill="#e95420" opacity="0.18"/>
  <circle cx="150" cy="560" r="180" fill="#3b82f6" opacity="0.15"/>
  <rect x="80" y="250" width="90" height="10" rx="5" fill="url(#accent)"/>
  <text x="80" y="360" font-family="Ubuntu, Arial, sans-serif" font-size="72" font-weight="700" fill="#ffffff">Nombre Apellido</text>
  <text x="80" y="430" font-family="Ubuntu, Arial, sans-serif" font-size="38" fill="#a1a1a1">Fullstack Developer &amp; Graphic Designer</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og/default.png');
console.log('OG image generada en public/og/default.png');