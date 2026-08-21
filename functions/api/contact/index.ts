/// <reference types="@cloudflare/workers-types" />

/**
 * Cloudflare Pages Function -> POST /api/contact
 * Valida el payload + honeypot y envia el email via Resend (HTTP API):
 * aviso a CONTACT_TO y respuesta automatica al visitante.
 */
interface Env {
  RESEND_API_KEY: string;
  /** Remitente verificado en Resend. */
  CONTACT_FROM?: string;
  /** Casilla de destino. */
  CONTACT_TO?: string;
}

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DEFAULT_FROM = 'Eliezer R. Catari <dev@elicatari.com>';
const DEFAULT_TO = 'dev@elicatari.com';

const json = (data: unknown, status = 200): Response =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const escapeHtml = (value: string): string =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const sendResend = async (
  apiKey: string,
  payload: Record<string, unknown>,
): Promise<boolean> => {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  return res.ok;
};

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return json({ ok: false, error: 'invalid_json' }, 400);
  }

  // Honeypot: si viene relleno, es un bot. Respondemos 200 sin enviar.
  if (typeof payload.company === 'string' && payload.company.trim() !== '') {
    return json({ ok: true });
  }

  const name = typeof payload.name === 'string' ? payload.name.trim() : '';
  const email = typeof payload.email === 'string' ? payload.email.trim() : '';
  const message = typeof payload.message === 'string' ? payload.message.trim() : '';

  if (!name || !email || !message) {
    return json({ ok: false, error: 'missing_fields' }, 400);
  }
  if (!EMAIL_RE.test(email) || email.length > 320) {
    return json({ ok: false, error: 'invalid_email' }, 400);
  }
  if (name.length > 120 || message.length > 5000) {
    return json({ ok: false, error: 'too_long' }, 400);
  }

  if (!env.RESEND_API_KEY) {
    return json({ ok: false, error: 'server_misconfigured' }, 500);
  }

  const from = env.CONTACT_FROM ?? DEFAULT_FROM;
  const to = env.CONTACT_TO ?? DEFAULT_TO;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

  const notified = await sendResend(env.RESEND_API_KEY, {
    from,
    to,
    reply_to: email,
    subject: `Nuevo mensaje de ${name} — Portfolio`,
    html: `
        <h2>Nuevo mensaje desde el portfolio</h2>
        <p><strong>Nombre:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${safeMessage}</p>
      `,
  });

  if (!notified) {
    return json({ ok: false, error: 'send_failed' }, 502);
  }

  // Respuesta automatica: si falla, el aviso a CONTACT_TO ya se envio.
  await sendResend(env.RESEND_API_KEY, {
    from,
    to: email,
    subject: 'Recibí tu mensaje — Eliezer Rojas',
    html: `
        <p>Hola ${safeName},</p>
        <p>Recibí tu mensaje y te responderé a la brevedad.</p>
        <p>Hi ${safeName}, I received your message and will get back to you soon.</p>
        <p>— Eliezer Rojas</p>
      `,
  });

  return json({ ok: true });
};