#!/usr/bin/env node

switch (process.argv[2]) {
    case "setup":
        require("../dist/setup");
        break;
    case "start":
        require("./start");
        break;
}