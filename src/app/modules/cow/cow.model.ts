import { Schema, model } from "mongoose";
import { ICow, CowModel } from "./cow.interface";
import { Breed, Category, Label, Location } from "./cow.constants";

// Cow Schema
export const cowSchema = new Schema<ICow>(
  {
    name: { type: String, required: true },
    age: { type: Number, unique: true, required: true },
    price: { type: Number, required: true },
    location: { type: String, enum: Location, required: true },
    breed: { type: String, enum: Breed, required: true },
    weight: { type: Number, required: true },
    label: { type: String, enum: Label, required: true },
    category: { type: String, enum: Category, required: true },
    seller: { type: String, required: true },
  },
  {
    timestamps: true, // It will add createdAt & updatedAt fields
    toJSON: {
      // If we use it, we will get _id as id
      virtuals: true,
    },
  }
);

export const Cow = model<ICow, CowModel>("Cow", cowSchema);
