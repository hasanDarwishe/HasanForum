import express from "express";
import dotenv from "dotenv";

dotenv.config({
  path: "../.env"
})

const app = express();
const port = Number(process.env.PORT)

app.listen()