const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3306;
const db = require("./models");


// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// Add routes, both API and view
app.use(routes);

// Connect to the MySQL
//
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/', function (req, resp) {
  connection.query("SELECT * FROM products", function (error, rows, fields){})
});

// Start the API server
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});