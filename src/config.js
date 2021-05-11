import { config } from "dotenv";
config();

export default {
  MONGODB_URI: process.env.DB_CNN_STRING || "mongodb+srv://admin:kenshin1986@cluster0.hr2hs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  PORT: process.env.PORT || 4000,
  SECRET: 'products-api',
};
