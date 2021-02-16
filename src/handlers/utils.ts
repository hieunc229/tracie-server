import { Request, Response } from "express";

export function resOK(req: Request, res: Response, opts?: { status?: number, message?: string, [name:string]: any }) {

    let { status = 200, ...rest } = Object.assign(opts, {});

    res.status(status)
        .send(rest)
}


export function resError(req: Request, res: Response, opts?: { status?: number, message?: string }, others?: any) {

    let { status = 400, message = "error", ...rest } = Object.assign(opts, {});

    if (others) {
        console.log(others);
    }

    res.status(status)
        .send({ message, ...rest })
}