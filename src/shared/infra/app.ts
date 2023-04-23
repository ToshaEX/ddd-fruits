import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';
import { ApolloServer, gql } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import mongoose from 'mongoose';
import { authConfig } from '../../config';
import http from 'http';
import cors from 'cors';
import { fruitStorageResolver } from '../../modules/fruit/application/resolver/fruit.resolver';
import { typeDefs as FruitStore } from '../../modules/fruit/infra/graphql/fruit.typedefs';

const origin = {
  // origin: isProduction ? 'https://dddforum.com' : '*',
  origin: '*',
};

const app = express();
const httpServer = http.createServer(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(origin));
app.use(compression());
// app.use(morgan('combined'));

const port = Number(process.env.PORT) || 5000;
try {
  mongoose.connect(authConfig.connectionString);

  listen(port);
  console.log(`🚀 Server is ready at http://localhost:${port}/graphql`);
} catch (err) {
  console.log(err);
}

async function listen(port: number) {
  const server = new ApolloServer({
    typeDefs: [FruitStore],
    resolvers: [fruitStorageResolver],
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    introspection: true,
    formatError: (error) => ({
      message: error.message,
      path: error.path,
      locations: error.locations,
    }),
  });

  await server.start();
  server.applyMiddleware({ app });
  return new Promise((resolve, reject) => {
    httpServer.listen(port).once('listening', resolve).once('error', reject);
  });
}

// app.listen(port, () => {
//   console.log(`[App]: Listening on port ${port}`);
// });
