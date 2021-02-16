
import { Express } from "express";
import { addHandler } from "./add";
import { queryHandler } from "./query";

export function initiateHandler(app: Express) {
    app.get("/", queryHandler);
    app.post("/", addHandler);
}