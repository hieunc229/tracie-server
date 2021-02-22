import express from "express";
import { initiateHandler } from "./handlers";

const cors =require("cors");
const app = express();

app.use(express.json());
app.use(cors());

initiateHandler(app);

export default app;