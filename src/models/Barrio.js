import { Schema, model } from "mongoose";


const barrioSchema = new Schema(
  {
    name: {
      type: String,
    },
    

  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Barrio", barrioSchema);
