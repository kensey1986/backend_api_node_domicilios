import { Schema, model } from "mongoose";

const clienteSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },

    name: {
      type: String,
    },
    apellido: {
      type: String,
    },

    documento: {
      type: String,
    },

    direccion: {
      type: Schema.Types.ObjectId,
      ref: "Direccion",
    },

    barrio: {
      type: Schema.Types.ObjectId,
      ref: "Barrio",
    },

    nacimiento: {
      type: Date,
    },

    fijo: {
      type: String,
    },

    celular: {
      type: String,
    },

    email: {
      type: String,
    },

    sucursal: {
      type: Schema.Types.ObjectId,
      ref: "Sucursal",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);



export default model("Cliente", clienteSchema);
