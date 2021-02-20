# Tracie Server

A self-hosted event tracking services, built with [Knex](http://knexjs.org/) (support Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift), in NodeJS.

_Note: The server use SQLite3 by default, and only support one domain at the moment_

## Setup

Asume you have clone or download the project to your machine, continue the following steps to setup:

1. Setup enviroment variables by copy `.env.blank` content to a new `.env` file
2. Setup connection by run `yarn setup` or `npm run setup`
3. Start server by run `yarn start` or `npm run start`

Your server should be ready. 

## Server (APIs):

### Create an event

```js
[POST] /endpoint: create a trace instance 
```

Body content must contains a `name` property

```json
{
    "name": "string"
}
```

### Query data

```js
[GET] /endpoint?{query}={value}: query data
```

Available queries params:

| Name | Type and value | Definition |
| ---- | ---------- | --- |
| `$name` | `string` | event names, separate by a comma (.ie signup,hits) |
| `$interval` | `month`, `week`, `day`, `hour`, `minute` | group result by an interval unit  |
| `$intervalValue` | `number` | period of `$interval` i.e 2 days, 3 weeks |
| `$start` | `number`, `string` | starting time in milliseconds or a valid JS date string |
| `$end` | `number`, `string` | ending time in milliseconds or a valid JS date string |


Query output

```js
{ 
    data: [{
        name: string,
        result: {
            [date: string]: number
        }
    }]
}
```

Where
- `name`: event name
- `date`: ISODate format string
- `date`'s value: the frequency number 