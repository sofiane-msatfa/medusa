import express from "express";
require('express-async-errors');

import { userRouter } from "./routers";
import { errorHandler } from "./utils/error-handler";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/greetings/:name", (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

app.use("/users", userRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
