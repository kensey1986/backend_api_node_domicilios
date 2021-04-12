import { Schema, model } from "mongoose";


const direccionSchema = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

export default model("Direccion", direccionSchema);
