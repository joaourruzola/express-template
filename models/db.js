import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

/*
definir os seguintes parâmetros:
host, user, password, database
*/

const connection = mysql.createConnection({});

export default connection;
