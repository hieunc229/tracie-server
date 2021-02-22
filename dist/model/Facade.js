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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.knexQuerySQLite = void 0;
const shortid_1 = __importDefault(require("shortid"));
const conn_1 = __importDefault(require("../conn"));
const EVENT_TABLE = "events";
class Facade {
    insert(data) {
        return conn_1.default.table(EVENT_TABLE).insert(Object.assign(Object.assign({}, data), { id: shortid_1.default.generate(), created: new Date() }));
    }
    query(query) {
        let { $name } = query, rest = __rest(query, ["$name"]);
        if (!$name)
            return Promise.resolve([]);
        return Promise.all($name.split(",")
            .map(name => knexQuerySQLite(conn_1.default, EVENT_TABLE, Object.assign({ $name: name }, rest))));
    }
}
exports.default = Facade;
function knexQuerySQLite(conn, table, query) {
    return new Promise((resolve, reject) => {
        let { $name, $start, $end } = query;
        let req = conn.select().table(table)
            .where("name", $name);
        if ($start) {
            req = req.where("created", ">=", formatDate($start));
        }
        if ($end) {
            req = req.where("created", "<", formatDate($end));
        }
        req.then(rs => {
            resolve({ data: rs, name: $name });
        }).catch(reject);
    });
}
exports.knexQuerySQLite = knexQuerySQLite;
function formatDate(input) {
    return new Date(input).getTime();
}
