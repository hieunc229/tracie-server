"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addHandler = void 0;
const fc_1 = __importDefault(require("./utils/fc"));
const helpers_1 = require("./helpers");
function addHandler(req, res) {
    let { name } = req.body;
    fc_1.default.insert({
        name
    })
        .then(rs => {
        helpers_1.resOK(req, res, { status: 204 });
    })
        .catch(err => {
        helpers_1.resError(req, res, { message: err.toString() }, err);
    });
}
exports.addHandler = addHandler;
