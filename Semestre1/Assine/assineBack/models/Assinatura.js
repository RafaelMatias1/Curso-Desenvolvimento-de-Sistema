import Sequelize from "sequelize";
import connection from "../config/db.js";
import Abaixoassinado from "./Abaixoassinado.js";
import User from "./User.js";


const Assinatura = connection.define(
    'assinatura',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        idUser: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: "users",
                key: "id"
            }
        },
        idAbaixoassinado: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: "abaixoassinados",
                key: "id"
            }
        },
        dttimee: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }
);

Assinatura.belongsTo(Abaixoassinado, {
    foreignKey: "idAbaixoassinado"
});

Assinatura.belongsTo(User, {
    foreignKey: "idUser"
});

export default Assinatura;
