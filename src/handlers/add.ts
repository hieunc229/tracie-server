import fc from "./utils/fc";
import { Request, Response } from "express";
import { resError, resOK } from "./helpers";

export function addHandler(req: Request, res: Response) {

    let { name } = req.body;

    fc.insert({
        name
    })
        .then(rs => {
            resOK(req, res, { status: 204 });
        })
        .catch(err => {
            resError(req, res, { message: err.toString() }, err);
        })
}