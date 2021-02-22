import express from "express";
import path from "path";
import fs from "fs";
import chalk from "chalk";

import { initiateHandler } from "./handlers";

const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

if (process.env.TC_DASHBOARD_PATH && process.env.TC_DASHBOARD_PATH !== "false") {

    app.get(process.env.TC_DASHBOARD_PATH, (req, res) => {
        fs.readFile(path.join(__dirname, '../dashboard/index.html'), { encoding: 'utf-8' }, (err, data) => {

            let content = data.replace(`custom_scripts`, `
            window.TC_ENDPOINT = "${process.env.TC_ENDPOINT}";
            window.TC_HOST = "${process.env.TC_HOST}:${process.env.TC_PORT}";
            `);
            res.status(200).send(content);
        })

    })
    app.use("/static", express.static(path.join(__dirname, '../dashboard/static')));
    console.log(chalk.gray(`Dashboard available at: ${process.env.TC_DASHBOARD_PATH}`));
}

initiateHandler(app);

export default app;