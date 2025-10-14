const express = require("express");
const config = require("./src/configs/config");
const db = require("./src/configs/db");
const app = express();

app.use(express.json());

const port = config.PORT;

db.connect();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
