"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const chalk_1 = __importDefault(require("chalk"));
const STORAGE_PATH = process.env.TC_STORE_DIR || "";
console.log(chalk_1.default.gray(`DB Path: ${STORAGE_PATH}/main.db`));
const conn = knex_1.default({
    client: "sqlite3",
    connection: {
        filename: `${STORAGE_PATH}/main.db`,
    },
    useNullAsDefault: true
});
exports.default = conn;
