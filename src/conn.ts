import Knex from "knex";
import chalk from "chalk";

const STORAGE_PATH = process.env.TC_STORE_DIR || "";

console.log(chalk.gray(`DB Path: ${STORAGE_PATH}/main.db`));

const conn = Knex({
    client: "sqlite3",
    connection: {
        filename: `${STORAGE_PATH}/main.db`,
    },
    useNullAsDefault: true
});

export default conn;