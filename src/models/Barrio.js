import { Schema, model } from "mongoose";


const barrioSchema = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

export default model("Barrio", barrioSchema);
