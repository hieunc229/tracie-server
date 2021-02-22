<img src="docs/tracie.svg" height="60" alt="Tracie"/>

# Tracie Server

A self-hosted event tracking services, built with SQLite, in NodeJS.

<!-- TOC -->
- [Setup](#setup)
- [Server APIs](#server-apis)
    - [Create event](#create-an-event): [POST] /tc
    - [Query data](#query-data): [GET] /tc?{query}={value}
<!-- /TOC -->

## Setup

Asume you have clone or download the project to your machine, continue the following steps to setup:

1. Setup enviroment variables by copy `.env.blank` content to a new `.env` file
2. Setup connection by run `yarn setup` or `npm run setup`
3. Start server by run `yarn start` or `npm run start`

Your server should be ready. 

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