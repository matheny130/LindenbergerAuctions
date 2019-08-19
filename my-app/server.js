const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3306;
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "lindenbergerauctions",
});

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
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
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});