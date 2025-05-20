// instalação do nodemon "npm i -g nodemon"
// execute primeiro o banco de dados "./sql.sql"
// rode o migrate "nodemon migrate"
import connection from './config/db.js';
import User from './models/User.js';
import Abaixoassinado from './models/Abaixoassinado.js';
import Assinatura from './models/Assinatura.js';

const migrate = async () => {
    try {
        const result = await connection.sync();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

migrate();