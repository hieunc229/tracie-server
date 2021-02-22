import fc from "./fc";

import { Request, Response } from "express";
import { transformOutputData } from "../../utils/group";
import { resError, resOK } from "../helpers";

export function queryHandler(req: Request, res: Response) {

    // @ts-ignore
    fc.query(req.query)
        .then(queryResults => {

            let json = queryResults.map(rs => {

                let out = rs.data.map(x => x.created);

                let { $start = getStart(out), $end = getEnd(out), $interval, $intervalValue = "1" } = req.query as any;

                let start = new Date($start);
                let end = new Date($end);
                return {
                    name: rs.name,
                    result: transformOutputData(out, {
                        start, end,
                        intervalValue: parseInt($intervalValue),
                        interval: $interval as any || "day"
                    })
                }
            })

            resOK(req, res, { data: json });
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