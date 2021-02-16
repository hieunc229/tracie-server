import Knex from "knex";

const STORAGE_PATH = process.env.STORAGE_DIR || "";

console.log(`${STORAGE_PATH}/main.db`);

const conn = Knex({
    client: "sqlite3",
    connection: {
        filename: `${STORAGE_PATH}/main.db`,
    },
    useNullAsDefault: true
});

export function initateConnection() {

    conn.schema.hasTable("events").then(function (exists) {
        if (!exists) {
            conn.schema.createTable("events", t => {
                t.string("id").primary();
                t.string("name");
                t.dateTime("created");
            })
            .then(rs => {
                console.log(`Create new connection`);
            })
            .catch(err => {

            console.log(`Error:`, err);
            })
        } else {
            console.log(`Data connected. No changes`);
        }
    })

}

export default conn;