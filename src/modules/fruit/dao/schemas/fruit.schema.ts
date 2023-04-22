import mongoose, { Schema, model, Document } from 'mongoose';

interface FruitStorage extends Document {
  name: string;
  description: string;
  limit: number;
}

 const FruitStorageSchema = new Schema<FruitStorage>({
   _id: { type: mongoose.Types.ObjectId },
   name: { type: String, required: true },
   description: { type: String },
   limit: { type: Number, required: true },
 });

export const FruitStorageModel= model<FruitStorage>('FruitStorage', FruitStorageSchema);
