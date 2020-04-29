import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import prisma from './prisma';
import APIRoutes from './routes/api';

const hostname = '127.0.0.1';
const port = 3000;

const server = express();

export default function setupMiddleware(app: Application) {
  app.use(cors()); // TODO: add specific url
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
}
setupMiddleware(server);

server.get('/', (req, res) => {
  res.send('Hello World!');
});

server.get('/users', async (req, res) => {
  let users = await prisma.user.findMany();
  res.send({ users });
});
server.use('/api', APIRoutes);

server.listen(port, hostname, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://${hostname}:${port}/`);
});
