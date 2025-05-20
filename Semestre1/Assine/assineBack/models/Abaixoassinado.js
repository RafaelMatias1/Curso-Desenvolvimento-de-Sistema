import Sequelize from "sequelize";
import connection from "../config/db.js";
import User from "./User.js";


const Abaixoassinado = connection.define("abaixoassinado", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  idUser: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "users",
      key: "id",
    },
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  complemento: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cep: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  estado: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cidade: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Abaixoassinado.belongsTo(User, {
  foreignKey: "idUser"
});

export default Abaixoassinado;
