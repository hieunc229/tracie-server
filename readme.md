<img src="docs/tracie.svg" height="60" alt="Tracie"/>

# Tracie Server

A minimal, self-hosted event tracking services, built with SQLite (Knex), using NodeJS.

<!-- TOC -->
- [Setup](#setup)
    - [Run using PM2](run-using-pm2)
    - [Run as a Node application](run-as-a-node-application)
- [Server APIs](#server-apis)
    - [Create event](#create-an-event): [POST] /tc
    - [Query data](#query-data): [GET] /tc?{query}={value}
<!-- /TOC -->

## Setup

Asume you have clone or download the project to your machine. Once your server is running, the server should be accessable via `//localhost:8080` or as configed.

You can run using pm2, or as a node application as below:

### Run using PM2

[PM2](https://pm2.keymetrics.io/) is a node process manager. A [ecosystem.config.js](/ecosystem.config.js) config file should be ready to use. You can also customize as you want. Once completed, start the pm2 process:

```sh
$ pm2 start
```

### Run as a Node application

1. Setup enviroment variables by copy `.env.blank` content to a new `.env` file
2. Setup connection by run `yarn setup` or `npm run setup`
3. Start server by run `yarn start` or `npm start`

## Server (APIs):

Server APIs are exposed through `TRACIE_ENDPOINT` path setup on the `.env` file.

### Create an event:

```js
[POST] /tc
```

Body content must contains a `name` property

```json
{
    "name": "string"
}
```

### Query data

```js
[GET] /tc?{query}={value}
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