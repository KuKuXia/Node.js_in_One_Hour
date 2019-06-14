const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
var exphbs = require("express-handlebars");

const members = require('./Members');
const app = express();

//  Init Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Init Handerbars Middleware
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Init Logger Middleware
app.use(logger);

// Homepage Route
app.get("/", (req, res) =>
  res.render("index", {
    title: "Member App",
    members
  })
);

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Members API Routes
app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
