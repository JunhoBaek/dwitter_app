import config from "../config.js";
import SQ from "sequelize";

export const sequelize = new SQ.Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  {
    host: config.db.host,
    dialect: "mysql",
  }
);
