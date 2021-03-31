import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const deliverySchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: false,
    },

    password: {
      type: String,
      required: true,
    },
    
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

deliverySchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

deliverySchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword)
}

export default model("Delivery", deliverySchema);
