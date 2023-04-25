// import { FruitStorage } from '../fruit.entity';

// export type DeleteFruitForFruitStorageInput = {
//   name: string;
//   forceDelete: boolean;
// };

// export type StoreFruitToFruitStorageInput = {
//   name: string;
//   amount: number;
// };

// export type FruitForFruitStorage = {
//   _id?: string | undefined;
//   name: string;
//   description?: string;
//   limit?: number;
//   qty?: number;
// };

// export type CreateFruitForFruitStorageInput = Omit<FruitForFruitStorage, '_id' | 'qty'>;
// export type UpdateFruitForFruitStorageInput = Omit<FruitForFruitStorage, 'qty'>;

// export function createFruitStorage({ _id, name, description, limit, qty }: FruitForFruitStorage): FruitStorage {
//   const fruitStorage = new FruitStorage();
//   if (_id !== undefined) {
//     fruitStorage.setId = _id;
//   }
//   if (qty !== undefined) {
//     fruitStorage.setQty = qty;
//   }
//   fruitStorage.setName = name;
//   fruitStorage.setDescription = description;
//   fruitStorage.setLimit = limit;

//   return fruitStorage;
// }
