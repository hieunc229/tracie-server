#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv)).argv;

const defaultConfigs = {
    env: {
        TC_STORE_DIR: `./dev-data`,
        TC_HOST: 'localhost',
        TC_PORT: 8080,
        TC_ENDPOINT: `/tc`
    },
    env_production: {
        TC_STORE_DIR: `./data`,
        TC_HOST: '0.0.0.0',
        TC_PORT: 80,
        TC_ENDPOINT: `/tc`
    }
}

const supportedConfigs = Object.keys(defaultConfigs.env);
let config = argv.production ? defaultConfigs.env_production : defaultConfigs.env;

const appConfig = Object.assign({},config, argv);
Object.keys(appConfig).forEach(k => {
    if (supportedConfigs.indexOf(k) !== -1) {
        process.env[k] = appConfig[k]
    }
})

const chalk = require("chalk");
const app = require("../dist/app").default;
const PORT = process.env.TC_PORT;
const HOST = process.env.TC_HOST;

app.listen(PORT, HOST, () => {
    console.log(chalk.gray(`To exit, press Ctrl + C`));
    console.log(chalk.green(`Tracie server started at ${HOST}:${PORT}`));
})