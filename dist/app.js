"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const handlers_1 = require("./handlers");
const cors = require("cors");
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors());
handlers_1.initiateHandler(app);
exports.default = app;
