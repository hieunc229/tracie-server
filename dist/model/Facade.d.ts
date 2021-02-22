import KnexConn from "knex";
export default class Facade {
    insert(data: any): KnexConn.QueryBuilder<unknown, number[]>;
    query(query: Query): Promise<QueryResult[]>;
}
export declare type Query = {
    $name: string;
    $start?: Date;
    $end?: Date;
    $interval?: string;
};
export declare type QueryResult = {
    data: any[];
    name: string;
};
export declare function knexQuerySQLite(conn: KnexConn, table: string, query: Query): Promise<QueryResult>;
