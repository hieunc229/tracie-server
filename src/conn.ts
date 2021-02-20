import Knex from "knex";

const STORAGE_PATH = process.env.TC_STORE_PATH || "";

const conn = Knex({
    client: "sqlite3",
    connection: {
        filename: `${STORAGE_PATH}/main.db`,
    },
    useNullAsDefault: true
});

export default conn;