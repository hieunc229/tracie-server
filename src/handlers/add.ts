import fc from "./fc";
import { Request, Response } from "express";
import { resError, resOK } from "./utils";

export function addHandler(req: Request, res: Response) {

    let { name } = req.body;

    fc.insert({
        name
    })
        .then(rs => {
            resOK(req, res);
        })
        .catch(err => {
            resError(req, res, { message: err.toString() }, err);
        })
}