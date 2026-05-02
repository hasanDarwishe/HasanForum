import express from "express";
import dotenv from "dotenv";
import path from "path";

console.log(path.join(__dirname, "../../.env"))

dotenv.config({
  path: path.join(__dirname, "../../.env")
})

const app = express();
const port = Number(process.env.BACKEND_PORT);

app.get("/", (req, res) => {
  res.send("App is working!")
})

app.listen(port, () => {
  console.log(`App is running on port ${port}! visit it on http://localhost:${port}/ (for local development)`);
});