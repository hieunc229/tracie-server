"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const app_1 = __importDefault(require("./app"));
const PORT = process.env.TC_PORT || 8080;
const HOST = process.env.TC_HOST || "localhost";
app_1.default.listen(PORT, HOST, () => {
    console.log(`Tracie server started at ${HOST}:${PORT}`);
});
