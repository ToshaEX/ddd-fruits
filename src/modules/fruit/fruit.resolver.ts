export const fruitStorageResolver = {
  Mutation: {
    createFruitForFruitStorage: (_, { name, description, limit }) => {
       return { name, description, limit };
      // return 'String';
    },
  },
};
