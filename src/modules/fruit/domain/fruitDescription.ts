import { ValueObject } from '../../../shared/domain/ValueObject';
import { Result } from '../../../shared/core/Result';
import { Guard } from '../../../shared/core/Guard';

interface FruitDescriptionProps {
  description: string;
}

export class FruitDescription extends ValueObject<FruitDescriptionProps> {
  public static MAX_LENGTH: number = 30;

  get value(): string {
    return this.props.description;
  }

  private constructor(props: FruitDescriptionProps) {
    super(props);
  }

  public static create(props: FruitDescriptionProps): Result<FruitDescription> {
    

    const maxLengthResult = Guard.againstAtMost(this.MAX_LENGTH, props.description);
    if (maxLengthResult.isFailure) {
      return Result.fail<FruitDescription>(maxLengthResult.getErrorValue());
    }

    return Result.ok<FruitDescription>(new FruitDescription(props));
  }
}
