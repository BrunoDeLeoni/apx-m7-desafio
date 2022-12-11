/* Imports */
import { Sequelize } from "sequelize";

/* Sequelize */
const sequelize = new Sequelize({
    dialect: "postgres",
    username: process.env.CONNECTION_USER,
    password: process.env.CONNECTION_PASS,
    database: process.env.CONNECTION_DATABASE,
    port: 5432,
    host: process.env.CONNECTION_HOST,
    ssl: true,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});

/* Conexión a la Basde de Datos */
(async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }}    
)();

export { sequelize }