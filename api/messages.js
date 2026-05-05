// Vercel Serverless Function: secure proxy to Anthropic Messages API
// Frontend should POST to /api/messages with the same body shape as Anthropic's /v1/messages.
// The API key is read from the ANTHROPIC_KEY environment variable (set in Vercel dashboard).

export default async function handler(req, res) {
    if (req.method === 'OPTIONS') {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
          return res.status(204).end();
    }

  if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.ANTHROPIC_KEY;
    if (!apiKey) {
          return res.status(500).json({ error: 'Server misconfigured: ANTHROPIC_KEY missing' });
    }

  try {
        const body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);

      const upstream = await fetch('https://api.anthropic.com/v1/messages', {
              method: 'POST',
              headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': apiKey,
                        'anthropic-version': '2023-06-01'
              },
              body
      });

      const text = await upstream.text();
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Content-Type', upstream.headers.get('content-type') || 'application/json');
        return res.status(upstream.status).send(text);
  } catch (err) {
        return res.status(500).json({ error: 'Proxy error', detail: String(err && err.message || err) });
  }
}

export const config = {
    api: {
          bodyParser: { sizeLimit: '15mb' }
    }
};
