/* Imports */
import { Sequelize } from "sequelize";

/* Sequelize */
const sequelize = new Sequelize({
    dialect: "postgres",
    username: "apx_bruno_m7_desafio_user",
    password: "WN8zlvNJJmkWarL3FStr7OQDRTey9x1g",
    database: "apx_bruno_m7_desafio",
    port: 5432,
    host: "dpg-cdijmjqen0hi0cof41i0-a.oregon-postgres.render.com",
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