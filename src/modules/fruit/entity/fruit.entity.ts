import { v4 as uuid } from 'uuid';

export class FruitStorage {
  private id: string;
  private name: string;
  private description: string;
  private limit: string;
  private amount: number;

  constructor(name: string, description: string, limit: string) {
    this.id = uuid();
    this.name = name;
    this.description = description;
    this.limit = limit;
  }

  getId() {
    return this.id;
  }
  getAmount() {
    return this.amount;
  }

  getName() {
    return this.name;
  }
  getDescription() {
    return this.description;
  }
  getLimit() {
    return this.limit;
  }

  createFruitForFruitStorage(fruitStorage: FruitStorage) {
    console.log(fruitStorage);
  }
}
