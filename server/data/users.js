import { sequelize } from "../db/database.js";
import SQ from "sequelize";

const DataTypes = SQ.DataTypes;

export const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
});

export async function getUserById(id) {
  return User.findByPk(id);
}

export async function getUser(username) {
  return User.findOne({ where: { username } });
}

export async function create(username, password, email) {
  return User.create({
    username,
    password,
    email,
  }).then((data) => {
    return data.dataValues.id;
  });
}
