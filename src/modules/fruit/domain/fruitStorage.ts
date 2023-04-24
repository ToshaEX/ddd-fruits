import { ValueObject } from './ValueObject';
interface FruitProps {
  _id: string;
  name: string;
  description: string;
  limit: number;
  qty: number;
  isDeleted: boolean;
}

export class FruitValueObject extends ValueObject<FruitProps> {
  // Can't use the `new` keyword from outside the scope of the class.
  get value(): string {
    return this.props.name;
  }

  constructor(props: FruitProps) {
    super(props);
  }

  public static create(name: string): FruitValueObject {
    if (name === undefined || name === null) {
      throw new Error('User must be greater than 2 chars and less than 100.');
    } else {
      return new FruitValueObject({ name: name });
    }
  }
}
