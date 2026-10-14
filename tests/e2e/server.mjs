// Minimal static server for the generated site, mimicking a static host:
// exact file, then directory index.html, otherwise 404.html with status 404.
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';

const root = join(import.meta.dirname, '../../.output/public');
const port = Number(process.argv[2] ?? 4173);

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.xml': 'application/xml',
  '.webmanifest': 'application/manifest+json',
};

const isFile = async (path) => {
  try {
    return (await stat(path)).isFile();
  } catch {
    return false;
  }
};

const resolve = async (pathname) => {
  const base = join(root, normalize(decodeURIComponent(pathname)));

  if (!base.startsWith(root)) {
    return null;
  }

  for (const candidate of [base, join(base, 'index.html')]) {
    if (await isFile(candidate)) {
      return candidate;
    }
  }

  return null;
};

createServer(async (req, res) => {
  const { pathname } = new URL(req.url, 'http://localhost');
  const file = await resolve(pathname);
  const status = file ? 200 : 404;
  const path = file ?? join(root, '404.html');

  res.writeHead(status, { 'Content-Type': types[extname(path)] ?? 'application/octet-stream' });
  createReadStream(path).pipe(res);
}).listen(port);
