import { createFruitStorage } from './fruit.factory';
import { v4 as uuid } from 'uuid';

describe('Fruit Factory test', () => {
  describe('Fruit Storage Domain test', () => {
    it('Create fruit for fruit storage : valid input ', () => {
      const fruitStorage = createFruitStorage({ name: 'lemon', description: 'this is a lemon', limit: 10 });

      expect(fruitStorage.getId !== undefined).toBeTruthy();
      expect(fruitStorage.getName).toBe('lemon');
      expect(fruitStorage.getDescription).toBe('this is a lemon');
      expect(fruitStorage.getLimit).toBe(10);
    });

    it('Create fruit for fruit storage : invalid input ', () => {
      expect(() => {
        createFruitStorage({ name: 'lemon', description: 'this is a fruit with a very long description', limit: 10 });
      }).toThrowError('Description length exceeded, max length 30 characters');
    });

    it('Update fruit for fruit storage ', () => {
      const id = uuid();
      const fruitStorage = createFruitStorage({ _id: id, name: 'lemon', description: 'this is a lemon', limit: 10 });

      expect(fruitStorage.getId).toBe(id);
      expect(fruitStorage.getName).toBe('lemon');
      expect(fruitStorage.getDescription).toBe('this is a lemon');
      expect(fruitStorage.getLimit).toBe(10);
    });
  });
});
