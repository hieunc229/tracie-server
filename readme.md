# Tracie Server

Server (APIs):

## [POST] /endpoint: create a trace instance

Body structure 

```ts
type TracieCreateParams = {
    data: {
        name: string,
        params?: {
            [name:string]: string | number | boolean
        }
    }
}

// POST body example
{
	data: { name: “signup”, params: { target: "home" } }
}
```

## [GET] /endpoint?query=value: query data

```js
// endpoint?name=signup&start=jsmill&end=jsmill&target=home
{ 
    data: { 
        [date:string]: number 
    } 
}
```