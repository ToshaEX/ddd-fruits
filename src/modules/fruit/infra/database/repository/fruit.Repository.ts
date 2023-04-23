import { Schema, model, Document } from 'mongoose';

interface IFruitStorage extends Document {
  _id: string;
  name: string;
  description: string;
  qty: number;
  limit: number;
  isDeleted: boolean;
}

const FruitStorageSchema = new Schema<IFruitStorage>({
  _id: { type: String },
  name: { type: String, required: true },
  description: { type: String },
  qty: { type: Number, default: 0 },
  limit: { type: Number, required: true },
  isDeleted: { type: Boolean, default: false },
});

export const fruitStorageRepository = model<IFruitStorage>('FruitStorage', FruitStorageSchema);
