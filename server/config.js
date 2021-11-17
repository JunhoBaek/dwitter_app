import dotenv from "dotenv";

dotenv.config();

const config = {
  host: {
    port: process.env.PORT,
  },
  jwt: {
    priv: process.env.PRIV_KEY,
    salt: process.env.SALT,
  },
  db: {
    host: process.env.HOST,
  },
};

export default config;
