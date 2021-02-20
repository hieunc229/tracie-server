require('dotenv').config();

import conn from "./conn";

function initateConnection() {
    console.log(`\n==================`);
    conn.schema.hasTable("events").then(exists => {
        if (!exists) {
            conn.schema.createTable("events", t => {
                t.string("id").primary();
                t.string("name");
                t.dateTime("created");
            })
                .then(rs => {
                    console.log(`[SETUP] created "events" table. Completed!\n`);
                })
                .catch(err => {
                    console.log(`[ERROR]:`, err);
                })
                .finally(process.exit)
        } else {
            console.log(`[SETUP] Already setup. No changes\n`);
            process.exit();
        }
    })
}

initateConnection();