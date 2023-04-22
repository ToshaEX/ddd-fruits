import { v4 as uuid } from 'uuid';

export class FruitStorage {
  private _id: string;
  private name: string;
  private description: string;
  private limit: number;
  private qty: number;

  constructor() {
    this._id = uuid();
  }

  get getId(): string {
    return this._id;
  }

  get getQty() {
    return this.qty;
  }

  get getName() {
    return this.name;
  }
  get getDescription() {
    return this.description;
  }
  get getLimit() {
    return this.limit;
  }

  set setId(value: string) {
    this._id = value;
  }

  set setQty(value: number) {
    this.qty = value;
  }

  set setName(value: string) {
    this.name = value;
  }
  set setDescription(value: string) {
    this.description = value;
  }
  set setLimit(value: number) {
    this.limit = value;
  }
}
