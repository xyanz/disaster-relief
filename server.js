// Dependences
const express = require("express");
const logger = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

// Port for listening
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Logger
app.use(logger("dev"));

// view templates
app.set("views", path.join(__dirname, "views"));
// templating engine
app.set("view engine", "ejs");

app.use("/static", express.static(path.join(__dirname, "public")));
//  index route!
app.get("/", (req, res) => {
  res.render("index");
});

// User input from REACT
// Converting UserInput information to Latitude and Longitude
// Darkapi json data

// const geocodeApi = require("./services/geocoding");
// const googlePlaceAutocomplete = require("./services/googlePlaceAutocomplete");
// const skyHelpers = require("./services/skyHelpers");

// app.post("/googleplaces/", googlePlaceAutocomplete, function(req, res) {
//   console.log("res.locals.places: ", res.locals.places);
//   res.json(res.locals);
// });

// app.post("/", geocodeApi, skyHelpers, (req, res) => {
//   console.log("FRONT REACT DATa :", req.body.userInput);
//   console.log(`JSON FORMAT DATA JASON FORMAT DATA`, res.locals.data);
//   console.log(`LOCation DATA LOCATION DATA`, res.locals.name);
//   res.json(res.locals);
// });

// Error message
app.get("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});
