import fc from "./fc";

import { Request, Response } from "express";
import { transformOutputData } from "../utils/group";
import { resError, resOK } from "./utils";

export function queryHandler(req: Request, res: Response) {

    fc.query(req.query)
        .then(rs => {
            let out = rs.data.map(x => x.created);
            let { $start = getStart(out), $end = getEnd(out), $interval, $intervalValue = "1" } = req.query as any;

            let start = new Date($start);
            let end = new Date($end);

            resOK(req, res, {
                data: transformOutputData(out, {
                    start, end, 
                    intervalValue: parseInt($intervalValue),
                    interval: $interval as any || "day"
                })
            });
        })
        .catch(err => {
            resError(req, res, { message: err.toString() });
        })
}

function getStart(input: number[]) {
    return Math.min(...input)
}

function getEnd(input: number[]) {
    return Math.max(...input)
}