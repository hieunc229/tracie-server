"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initiateHandler = void 0;
const add_1 = require("./add");
const query_1 = require("./utils/query");
const endpoint = process.env.TC_ENDPOINT || "/";
function initiateHandler(app) {
    app.get(endpoint, query_1.queryHandler);
    app.post(endpoint, add_1.addHandler);
}
exports.initiateHandler = initiateHandler;
