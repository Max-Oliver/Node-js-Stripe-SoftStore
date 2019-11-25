const express = require("express");
const expbhs = require("express-handlebars");
const path = require("path");

//Inicializacion
const app = express();

//Settings
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  expbhs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs"
  })
);
app.set("view engine", ".hbs");

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use(require("./routes/index.routes"));

//static files
app.use(express.static(path.join(__dirname, "public")));

//Start Server
app.listen(3003, () => {
  console.log("Server on port", 3003);
});
