import { fruitStorageRepository } from '../../infra/database/repository/fruit.Repository';
import { FruitStorage } from '../entity/fruit.entity';
import { createFruitStorage, CreateFruitForFruitStorageInput } from '../factory/fruit.factory';

export class FruitStorageService {
  async createFruitForFruitStorage(createFruitForFruitStorageInput: CreateFruitForFruitStorageInput): Promise<void> {
    const fruitStorage = createFruitStorage(createFruitForFruitStorageInput);
    const fruitRepo = fruitStorageRepository.create(fruitStorage);
    await Promise.all([fruitRepo]);
    return;
  }
}
