import shortid from "shortid";
import conn from "../conn";
import KnexConn from "knex";

const EVENT_TABLE = "events";

export default class Facade {

    insert(data: any) {
        return conn.table(EVENT_TABLE).insert({
            ...data,
            id: shortid.generate(),
            created: new Date()
        })
    }


    query(query: Query): Promise<QueryResult> {
        return knexQuerySQLite(conn, EVENT_TABLE, query);
    }

}

export type Query = {
    $name?: string,
    $start?: Date,
    $end?: Date,
    $interval?: string
}

export type QueryResult = {
    data: any[]
}

export function knexQuerySQLite(conn: KnexConn, table: string, query: Query): Promise<QueryResult> {
    return new Promise((resolve, reject) => {

        let { $name, $start, $end } = query;

        let req = conn.select().table(table)
            .where("name", $name);

        if ($start) {
            req = req.where("created", ">=", formatDate($start));
            // console.log("start", formatDate($start));
        }


        if ($end) {
            req = req.where("created", "<",  formatDate($end));
        }

        req.then(rs => {
            resolve({ data: rs as any[] })
        }).catch(reject);
    });
}

function formatDate(input:any) {
    // return new Date(input).toJSON().substr(0,19) + 'Z';
    return new Date(input).getTime();
}