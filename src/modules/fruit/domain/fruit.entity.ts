
import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { FruitDescription } from './fruitDescription';

interface FruitPros {
  name: string;
  description: FruitDescription;
  limit: number;
  qty: number;
  isDeleted: boolean;
}

export class FruitStorage extends AggregateRoot<FruitPros> {
  constructor(props: FruitPros, id?: string) {
    super(props, id);
  }

  get getId(): string {
    return this._id;
  }

  get getQty() {
    return this.props.qty;
  }

  get getName() {
    return this.props.name;
  }
  get getDescription():FruitDescription {
    return this.props.description;
  }
  get getLimit() {
    return this.props.limit;
  }
  get getIsDeleted() {
    return this.props.isDeleted;
  }


  public addQty(value: number) {
    const totalVal = this.props.qty + value;
    if (this.props.limit < totalVal) {
      throw new Error(`Can't add more than ${this.props.limit}`);
    }
    this.props.qty = totalVal;
  }

  public subtractQty(value: number) {
    const totalVal = this.props.qty - value;
    if (0 > totalVal) {
      throw new Error(`Can't subtract, exceeding lower bound. Available quantity ${this.props.qty}`);
    }
    this.props.qty = totalVal;
  }
}
