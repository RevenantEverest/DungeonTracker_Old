const http = require('http');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const chalk = require('chalk');

const app = express();
const PORT = process.env.PORT || 3005;

/* Middleware */
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* Routes */

/* Default Routes */
app.use("/", (req, res) => res.json({ message: "DungeonTracker" }));

const server = http.createServer(app);
server.listen(PORT, () => console.log(chalk.hex("#00ff00")("[HTTP]") + ` DungeonTracker: Listening on port ${PORT}`));

module.exports = server;