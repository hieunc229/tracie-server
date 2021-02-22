import { Request, Response } from "express";
export declare function resOK(req: Request, res: Response, opts?: {
    status?: number;
    message?: string;
    [name: string]: any;
}): void;
export declare function resError(req: Request, res: Response, opts?: {
    status?: number;
    message?: string;
}, others?: any): void;
