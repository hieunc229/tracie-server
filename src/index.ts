require('dotenv').config();

import app from "./app";
import { initiateHandler } from "./handlers";

const PORT = process.env.TC_PORT as any || 8080;
const HOST = process.env.TC_HOST || "localhost";

initiateHandler(app);

app.listen(PORT, HOST, () => {
    console.log(`Tracie server started at ${HOST}:${PORT}`);
})