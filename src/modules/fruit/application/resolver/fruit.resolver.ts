import { FruitRepositoryOutput, FruitStorageService } from '../../domain/services/fruit.service';

const fruitStorageService = new FruitStorageService();

type StoreType = {
  name: string;
  amount: number;
};

type CreateType = {
  _id: string;
  name: string;
  description: string;
  limit: number;
};

type DeleteType = {
  name: string;
  forceDelete: boolean;
};

type NameType = {
  name: string;
};

export const fruitStorageResolver = {
  Query: {
    async findFruit(_, { name }: NameType): Promise<FruitRepositoryOutput[]> {
      try {
        return await fruitStorageService.findFruit(name);
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    storeFruitToFruitStorage: async (_, { name, amount }: StoreType) => {
      try {
        await fruitStorageService.storeFruitToFruitStorage({ name, amount });
        return `${name}, ${amount}`;
      } catch (err) {
        throw new Error(err);
      }
    },
    removeFruitFromFruitStorage: async (_, { name, amount }: StoreType) => {
      try {
        await fruitStorageService.removeFruitFromFruitStorage({ name, amount });
        return `${name}, ${amount}`;
      } catch (err) {
        throw new Error(err);
      }
    },

    createFruitForFruitStorage: async (_, { name, description, limit }: CreateType) => {
      try {
        await fruitStorageService.createFruitForFruitStorage({ name, description, limit });
        return `${name}, ${description} , ${limit}`;
      } catch (err) {
        throw new Error(err);
      }
    },

    updateFruitForFruitStorage: async (_, { _id, name, description, limit }: CreateType) => {
      try {
        await fruitStorageService.updateFruitForFruitStorage({ _id, name, description, limit });
        return `${name}, ${description} , ${limit}`;
      } catch (err) {
        throw new Error(err);
      }
    },
    deleteFruitFromFruitStorage: async (_, { name, forceDelete }: DeleteType) => {
      try {
        await fruitStorageService.deleteFruitForFruitStorage({ name, forceDelete });
        return `${name}, ${forceDelete}`;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
