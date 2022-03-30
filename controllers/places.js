// Add code to create and export an express.Route()
const router = require("express").Router();
const places = require("../models/places.js");

// Create first route. Will be used in index.js (GET route that will show a list of all places)
router.get("/", (req, res) => {
  res.render("places/index", { places });
});

router.post("/", (req, res) => {
  // console.log(req.body)
  if (!req.body.pic) {
    req.body.pic = "http://placekitten.com/400/400"; // Default image if one is not provided
  }
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  places.push(req.body);
  res.redirect("/places");
});

router.get("/new", (req, res) => {
  res.render("places/new");
});

router.get("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/show", { place: places[id], id });
  }
});

router.get("/:id/edit", (req, res) => {
  let id = req.params.id;
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/edit", { place: places[id], id });
  }
});

// req.body.input = what user enters
router.put("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    if (!req.body.pic) {
      req.body.pic = "http://placekitten.com/400/400";
    }
    if (!req.body.city) {
      req.body.city = "Anytown";
    }
    if (!req.body.state) {
      req.body.state = "USA";
    }
    // Save the new data into places [id]
    places[id] = req.body;
    res.redirect(`/places/${id}`);
  }
});

router.delete("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    places.splice(id, 1);
    res.redirect("/places");
  }
});

module.exports = router;
