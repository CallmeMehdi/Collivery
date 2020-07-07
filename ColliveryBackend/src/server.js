const express = require("express");

 const helmet = require("helmet");

 const cors = require("cors");

 const logger = require("morgan");

 const mongoose = require("mongoose");

 const passport = require("passport");

const app = express();

const server = require("http").Server(app);

/*****Middlewares*****/

 app.use(helmet());
 app.use(logger("dev"));
 app.use(cors());
 app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/******************************/

//imports
//auto require our routes
//BY DEFAULT routes are on  localhost//{routefilename}
require("./routers/router")(app);
const config = require("./config/config");

 mongoose.connect(`mongodb://${config.db.dbHostName}:${config.db.dbPort}/${config.db.dbName}`,{ useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("Connexion à MongoDB réussie !")).catch(() => console.log("Connexion à MongoDB échouée !"));

server.listen(config.port, config.hostname, () => {
  console.log(`Server running at http://${config.hostname}:${config.port}/`);
});
