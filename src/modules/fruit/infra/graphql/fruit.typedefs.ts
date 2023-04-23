import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type FruitRepositoryOutput {
    _id: String
    name: String
    description: String
    qty: Int
    limit: Int
    isDeleted: Boolean
  }

  type Query {
    findFruit(name: String): [FruitRepositoryOutput]
  }

  type Mutation {
    storeFruitToFruitStorage(name: String, amount: Int): String
    removeFruitFromFruitStorage(name: String, amount: Int): String
    createFruitForFruitStorage(name: String, description: String, limit: Int): String
    updateFruitForFruitStorage(_id: String, name: String, description: String, limit: Int): String
    deleteFruitFromFruitStorage(name: String, forceDelete: Boolean): String
  }
`;
