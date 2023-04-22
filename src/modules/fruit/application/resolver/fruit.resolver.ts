
type StoreType = {
  name: string;
  amount: number;
};

type CreateType = {
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
    findFruit(_, { name }: NameType): NameType {
      return { name };
    },
  },
  Mutation: {
    storeFruitToFruitStorage: (_, { name, amount }: StoreType) => {
      return `${name}, ${amount}`;
    },
    removeFruitFromFruitStorage: (_, { name, amount }: StoreType) => {
      return `${name}, ${amount}`;
    },
    createFruitForFruitStorage: (_, { name, description, limit }: CreateType) => {
      return `${name}, ${description} , ${limit}`;
    },
    updateFruitForFruitStorage: (_, { name, description, limit }: CreateType) => {
      return `${name}, ${description} , ${limit}`;
    },
    deleteFruitFromFruitStorage: (_, { name, forceDelete }: DeleteType) => {
      return `${name}, ${forceDelete}`;
    },
  },
};
