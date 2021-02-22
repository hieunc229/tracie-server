"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const chalk_1 = __importDefault(require("chalk"));
const handlers_1 = require("./handlers");
const app = express_1.default();
const cors = require("cors");
app.use(cors());
app.use(express_1.default.json());
if (process.env.TC_DASHBOARD_PATH && process.env.TC_DASHBOARD_PATH !== "false") {
    app.get(process.env.TC_DASHBOARD_PATH, (req, res) => {
        fs_1.default.readFile(path_1.default.join(__dirname, '../dashboard/index.html'), { encoding: 'utf-8' }, (err, data) => {
            let content = data.replace(`custom_scripts`, `
            window.TC_ENDPOINT = "${process.env.TC_ENDPOINT}";
            window.TC_HOST = "${process.env.TC_HOST}:${process.env.TC_PORT}";
            `);
            res.status(200).send(content);
        });
    });
    app.use("/static", express_1.default.static(path_1.default.join(__dirname, '../dashboard/static')));
    console.log(chalk_1.default.gray(`Dashboard available at: ${process.env.TC_DASHBOARD_PATH}`));
}
handlers_1.initiateHandler(app);
exports.default = app;
