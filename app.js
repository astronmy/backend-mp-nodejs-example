const express = require('express');
const routes  = require("./src/routes/routes");
const app     = express();

app.use(express.json());
app.use("/api/v1/", routes);


let PORT = 3000;
app.listen(PORT)