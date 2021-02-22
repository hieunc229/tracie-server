"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const conn_1 = __importDefault(require("./conn"));
function initateConnection() {
    console.log(`\n==================`);
    conn_1.default.schema.hasTable("events").then(exists => {
        if (!exists) {
            conn_1.default.schema.createTable("events", t => {
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
                .finally(process.exit);
        }
        else {
            console.log(`[SETUP] Already setup. No changes\n`);
            process.exit();
        }
    });
}
initateConnection();
