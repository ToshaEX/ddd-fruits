import { v4 as uuid } from 'uuid';

export class FruitStorage {
  private _id: string;
  private _name: string;
  private _description: string;
  private _limit: number;
  private _amount: number;

  constructor(name: string, description: string, limit: number) {
    this._id = uuid();
    this._name = name;
    this._description = description;
    this._limit = limit;
  }

  get id(): string {
    return this._id;
  }
  get amount() {
    return this._amount;
  }

  get name() {
    return this._name;
  }
  get description() {
    return this._description;
  }
  get limit() {
    return this._limit;
  }

  set id(value: string) {
    this._id = value;
  }
  set amount(value: number) {
    this._amount = value;
  }

  set name(value: string) {
    this._name = value;
  }
  set description(value: string) {
    this._description = value;
  }
  set limit(value: number) {
    this._limit = value;
  }
}
