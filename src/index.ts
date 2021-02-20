require('dotenv').config();

import app from "./app";
import { initiateHandler } from "./handlers";

const PORT = process.env.PORT as any || 8080;
const HOST = process.env.HOST || "localhost";

initiateHandler(app);

app.listen(PORT, HOST, () => {
    console.log(`Tracie server started at ${HOST}:${PORT}`);
})