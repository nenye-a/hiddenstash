import express from 'express';

import prisma from './prisma';

const hostname = '127.0.0.1';
const port = 3000;

const server = express();

server.get('/', (req, res) => {
  res.send('Hello World!');
});

server.get('/users', async (req, res) => {
  let users = await prisma.user.findMany();
  res.send({ users });
});

server.listen(port, hostname, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://${hostname}:${port}/`);
});
