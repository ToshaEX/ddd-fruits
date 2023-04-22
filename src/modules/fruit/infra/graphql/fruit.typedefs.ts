import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type NameType {
    name: String
  }

  type Query {
    findFruit(name: String): NameType
  }

  type Mutation {
    storeFruitToFruitStorage(name: String, amount: Int): String
    removeFruitFromFruitStorage(name: String, amount: Int): String
    createFruitForFruitStorage(name: String, description: String, limit: Int): String
    updateFruitForFruitStorage(name: String, description: String, limit: Int): String
    deleteFruitFromFruitStorage(name: String, forceDelete: Boolean): String
  }
`;

