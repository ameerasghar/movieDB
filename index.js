// externals
const express = require("express");
const omdb = new (require("omdbapi"))("e051596");

// internals
const app = express();
const PORT = 3000;

// view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/:search", async (req, res) => {
  const search = req.params.search;
  omdb
    .search({
      search: search,
    })
    .then((results) => {
      res.send(results);
    })
    .catch(console.error);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
