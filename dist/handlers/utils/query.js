"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryHandler = void 0;
const fc_1 = __importDefault(require("./fc"));
const group_1 = require("../../utils/group");
const helpers_1 = require("../helpers");
function queryHandler(req, res) {
    // @ts-ignore
    fc_1.default.query(req.query)
        .then(queryResults => {
        let json = queryResults.map(rs => {
            let out = rs.data.map(x => x.created);
            let { $start = getStart(out), $end = getEnd(out), $interval, $intervalValue = "1" } = req.query;
            let start = new Date($start);
            let end = new Date($end);
            return {
                name: rs.name,
                result: group_1.transformOutputData(out, {
                    start, end,
                    intervalValue: parseInt($intervalValue),
                    interval: $interval || "day"
                })
            };
        });
        helpers_1.resOK(req, res, { data: json });
    })
        .catch(err => {
        helpers_1.resError(req, res, { message: err.toString() });
    });
}
exports.queryHandler = queryHandler;
function getStart(input) {
    return Math.min(...input);
}
function getEnd(input) {
    return Math.max(...input);
}
