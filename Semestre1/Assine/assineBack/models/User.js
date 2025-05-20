import Sequelize from "sequelize";
import connection from "../config/db.js";

const User = connection.define(
    'user',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cpf: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        rg: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        telefone: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        dtnascimento: {
            type: Sequelize.DATE,
            allowNull: true
        },
        admin: {
            type: Sequelize.BOOLEAN,
            allowNull: true
        }
    }
);

export default User;

