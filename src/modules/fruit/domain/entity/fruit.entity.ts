import { v4 as uuid } from 'uuid';

export class FruitStorage {
  private _id: string;
  private name: string;
  private description: string;
  private limit: number;
  private qty: number;
  private isDeleted: boolean;

  constructor() {
    this._id = uuid();
    this.isDeleted = false;
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
  get getIsDeleted() {
    return this.isDeleted;
  }

  set setId(value: string) {
    if (value === undefined) throw new Error('Invalid id');
    this._id = value;
  }

  set setQty(value: number) {
    this.qty = value;
  }

  set setName(value: string) {
    this.name = value;
  }
  set setDescription(value: string) {
    if (value.length > 30) throw new Error('Description length exceeded, max length 30 characters');
    this.description = value;
  }
  set setLimit(value: number) {
    this.limit = value;
  }
  set setIsDeleted(value: boolean) {
    this.isDeleted = value;
  }

  public addQty(value: number) {
    const totalVal = this.qty + value;
    if (this.limit < totalVal) {
      throw new Error(`Can't add more than ${this.limit}`);
    }
    this.qty = totalVal;
  }

  public subtractQty(value: number) {
    const totalVal = this.qty - value;
    if (0 > totalVal) {
      throw new Error(`Can't subtract, exceeding lower bound. Available quantity ${this.qty}`);
    }
    this.qty = totalVal;
  }
}
