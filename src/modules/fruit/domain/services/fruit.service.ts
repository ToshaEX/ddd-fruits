import { fruitStorageRepository } from '../../infra/database/repository/fruit.Repository';
import { FruitStorage } from '../fruit.entity';
import {
  createFruitStorage,
  CreateFruitForFruitStorageInput,
  UpdateFruitForFruitStorageInput,
  DeleteFruitForFruitStorageInput,
  StoreFruitToFruitStorageInput,
} from '../factory/fruit.factory';

export type FruitRepositoryOutput = {
  _id: string;
  name: string;
  description: string;
  qty: number;
  limit: number;
  isDeleted: boolean;
};

export class FruitStorageService {
  async storeFruitToFruitStorage(storeFruitToFruitStorageInput: StoreFruitToFruitStorageInput): Promise<void> {
    const { name, amount } = storeFruitToFruitStorageInput;
    const isExists = await this.getFruitByName(name);
    if (!isExists) {
      throw new Error('Fruit not found');
    }
    const fruitStorage = createFruitStorage(isExists);
    fruitStorage.addQty(amount);
    const fruitRepo = fruitStorageRepository.updateOne({ name }, fruitStorage, { upsert: true });
    await Promise.all([fruitRepo]);
    return;
  }

  async removeFruitFromFruitStorage(removeFruitToFruitStorageInput: StoreFruitToFruitStorageInput): Promise<void> {
    const { name, amount } = removeFruitToFruitStorageInput;
    const isExists = await this.getFruitByName(name);
    if (!isExists) {
      throw new Error('Fruit not found');
    }
    const fruitStorage = createFruitStorage(isExists);
    fruitStorage.subtractQty(amount);
    const fruitRepo = fruitStorageRepository.updateOne({ name }, fruitStorage, { upsert: true });
    await Promise.all([fruitRepo]);
    return;
  }

  async createFruitForFruitStorage(createFruitForFruitStorageInput: CreateFruitForFruitStorageInput): Promise<void> {
    const { name } = createFruitForFruitStorageInput;
    const isExists = await this.getFruitByName(name);
    if (isExists) {
      throw new Error('Fruit Name is Already Exists');
    }
    const fruitStorage = createFruitStorage(createFruitForFruitStorageInput);
    const fruitRepo = fruitStorageRepository.create(fruitStorage);
    await Promise.all([fruitRepo]);
    return;
  }

  async updateFruitForFruitStorage(updateFruitForFruitStorageInput: UpdateFruitForFruitStorageInput): Promise<void> {
    const { _id } = updateFruitForFruitStorageInput;
    const isExist = await this.getFruitById(_id);
    if (!isExist) {
      throw new Error('Not Fruit Existing');
    }
    const fruitStorage = createFruitStorage(updateFruitForFruitStorageInput);
    const fruitRepo = fruitStorageRepository.updateOne({ _id }, fruitStorage, { upsert: true });
    await Promise.all([fruitRepo]);
    return;
  }

  async deleteFruitForFruitStorage(deleteFruitForFruitStorageInput: DeleteFruitForFruitStorageInput): Promise<void> {
    const { name, forceDelete } = deleteFruitForFruitStorageInput;
    console.log(deleteFruitForFruitStorageInput);
    const isExist = await this.getFruitByName(name);
    if (!isExist) {
      throw new Error('Not Fruit Existing');
    }
    if (forceDelete) {
      await fruitStorageRepository.deleteOne({ name: name });
    } else {
      await fruitStorageRepository.updateOne({ name: name }, { isDeleted: true }, { upsert: true });
    }
    return;
  }

  async findFruit(name: string): Promise<FruitRepositoryOutput[]> {
    const regStr = new RegExp(`${name}`);
    return await fruitStorageRepository.find({ name: regStr });
  }

  private async getFruitByName(name: string): Promise<FruitRepositoryOutput> {
    return await fruitStorageRepository.findOne({ name });
  }

  private async getFruitById(_id: string): Promise<FruitRepositoryOutput> {
    return await fruitStorageRepository.findOne({ _id });
  }
}
