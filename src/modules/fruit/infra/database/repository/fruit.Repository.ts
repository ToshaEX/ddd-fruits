import mongoose, { Schema, model, Document } from 'mongoose';

interface FruitStorage extends Document {
  _id: string;
  name: string;
  description: string;
  qty: number;
  limit: number;
}

const FruitStorageSchema = new Schema<FruitStorage>({
  _id: { type: String },
  name: { type: String, required: true },
  description: { type: String },
  qty: { type: Number, default: 0 },
  limit: { type: Number, required: true },
});

export const fruitStorageRepository = model<FruitStorage>('FruitStorage', FruitStorageSchema);
