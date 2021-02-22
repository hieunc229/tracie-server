"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resError = exports.resOK = void 0;
function resOK(req, res, opts) {
    let _a = Object.assign({}, opts), { status = 200 } = _a, rest = __rest(_a, ["status"]);
    res.status(status)
        .send(rest);
}
exports.resOK = resOK;
function resError(req, res, opts, others) {
    let _a = Object.assign({}, opts), { status = 400, message = "error" } = _a, rest = __rest(_a, ["status", "message"]);
    if (others) {
        console.log(others);
    }
    res.status(status)
        .send(Object.assign({ message }, rest));
}
exports.resError = resError;
