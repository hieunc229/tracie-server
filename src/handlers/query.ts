import fc from "./fc";

import { Request, Response } from "express";
import { createGroup } from "../utils/group";
import { resError, resOK } from "./utils";

export function queryHandler(req: Request, res: Response) {

    fc.query(req.query)
        .then(rs => {
            resOK(req, res, { data: createGroup(rs.data.map(item => item.created), req.query[`$interval`] as any) });
        })
        .catch(err => {
            resError(req, res, { message: err.toString() });
        })
}