const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Next.js의 페이지들을 Express 서버에 등록
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 8001;

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});