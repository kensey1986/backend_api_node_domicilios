import { Schema, model } from "mongoose";

const clienteSchema = new Schema(
  {
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
      type: String,
    },

    barrio:  {
        type: Schema.Types.ObjectId,
        ref: "Barrio",
      },
    
      barrios: [
        {
          type: Object
        },
      ],
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

  },
  {
    timestamps: true,
    versionKey: false,
  }
);



export default model("Cliente", clienteSchema);
