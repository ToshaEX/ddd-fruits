import { FruitStorageModel } from './dao/schemas/fruit.schema';
import { FruitStorage } from './entity/fruit.entity';

export class FruitStorageRepository {
  async save(fruitStorage: FruitStorage) {
    const repo = new FruitStorageModel(fruitStorage);
    repo.save((err: any, savedObj: any) => {
      if (err) {
        console.log(err);
      } else {
        console.log(savedObj);
      }
    });
  }
  async findById(id) {}
  async findByEmail(email) {}
  async delete(id) {}
}
