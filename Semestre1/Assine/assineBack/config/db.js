import Sequelize from "sequelize";

const connection = new Sequelize(
    'assine',
    'assine',
    'assine',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

export default connection;