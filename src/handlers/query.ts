import { Request, Response } from "express";
import { createGroup } from "../utils/group";
import fc from "./fc";
import { resError, resOK } from "./utils";

export function queryHandler(req: Request, res: Response) {


    fc.query(req.query)
        .then(rs => {
            resOK(req, res, { data: createGroup(rs.data.map(item => item.created), req.query[`$period`] as any) });
        })
        .catch(err => {
            resError(req, res, { message: err.toString() });
        })
}