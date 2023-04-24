import { fruitStorageResolver } from './fruit.resolver';

describe('Resolver Tests', () => {
  describe('createFruitForFruitStorage', () => {
    
    it('Test:1', async () => {
      const create = await fruitStorageResolver.Mutation.createFruitForFruitStorage(
        {},
        { name: 'lemon', description: 'this is a lemon', limit: 10 },
      );
      expect(create).toBe(`lemon, this is a lemon , 10`);
    }, 10000);
  });

});
