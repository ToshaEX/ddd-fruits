import { FruitStorage } from '../entity/fruit.entity';


export type CreateFruitForFruitStorageInput = {
  name: string;
  description: string;
  limit: number;
};

export function createFruitStorage({ name, description, limit }: CreateFruitForFruitStorageInput): FruitStorage {
  const fruitStorage = new FruitStorage();
  fruitStorage.setName = name;
  fruitStorage.setDescription= description;
  fruitStorage.setLimit = limit;
console.log('Factory', fruitStorage);
  return fruitStorage;
}
