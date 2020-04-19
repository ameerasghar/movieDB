// externals
const express = require("express");
const omdb = new (require("omdbapi"))("e051596");
const bodyParser = require("body-parser");
const path = require("path");
const request = require("request");
const APIkey = "5351be2232cbd05941fb557df6f9c2b7";

// internals
const app = express();
const PORT = 3000;

// Set the default views directory to html folder
app.set("views", path.join(__dirname, "html"));

// express settings
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Set the folder for css & java scripts
app.use(express.static(path.join(__dirname, "css")));
// app.use(express.static(path.join(__dirname, "node_modules")));

app.get("/", async function (req, res) {
  var query = "Batman";
  var url = "http://www.omdbapi.com/?s=" + query + "&apikey=beacee9f";
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      res.render("index", { data: data.Search });
    }
  });
});

app.get("/search", async (req, res) => {
  const search = req.query.search;
  var url = "http://www.omdbapi.com/?s=" + search + "&apikey=beacee9f";
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      res.render("index", { data: data.Search });
    }
  });
});

app.get("/details", async (req, res) => {
  const search = req.query.search;
  console.log(search);
  var url = "http://www.omdbapi.com/?s=" + search + "&apikey=beacee9f";
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      res.render("index", { data: data.Search });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
