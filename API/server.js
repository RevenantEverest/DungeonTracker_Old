require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const chalk = require('chalk');
const cors = require('cors');

const verifyToken = require('./middleware/verifyToken');

const app = express();
const PORT = 3001 || process.env.PORT;

/* Middleware */
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(cookieParser());
app.use(cors());

app.use("/uploads", express.static('uploads'));

/* Routes */
app.use("/login", require("./routes/loginRoutes"));
app.use("/register", require("./routes/registerRoutes"));
app.use("/verify", require("./routes/verifyRoutes"));

app.use("/campaigns", verifyToken, require("./routes/campaignRoutes"));
app.use("/invite", verifyToken, require("./routes/inviteRoutes"));
app.use("/notes", verifyToken, require("./routes/noteRoutes"));

/* Default Routes */
app.use((req, res) => res.json({ message: "DungeonTracker-API" }));

app.listen(PORT, () => console.log(chalk.hex("#00ff00")("[HTTP]") + " DungeonTracker-API Ready"));