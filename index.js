const express = require("express");

const app = express();
const config = require("./src/configs/config");
const db = require("./src/configs/db");

app.use(express.json());
const port = config.PORT;

db.connect();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
