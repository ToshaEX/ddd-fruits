import { FruitStorageRepository } from '../../fruit.repo';
import { FruitStorage } from '../entity/fruit.entity';


export class FruitService {
  constructor(private readonly fruitStorageRepository: FruitStorageRepository) {
    
  }
  
} 