
import { Express } from "express";
import { addHandler } from "./add";
import { queryHandler } from "./query";

const endpoint = process.env.TC_ENDPOINT || "/"

export function initiateHandler(app: Express) {
    app.get(endpoint, queryHandler);
    app.post(endpoint, addHandler);
}