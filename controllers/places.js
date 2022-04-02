// Add code to create and export an express.Route()
const router = require("express").Router();

// Reference to models folder
const db = require("../models");

// Route pages

// Default Page
router.get("/", (req, res) => {
  db.Place.find()
    // Render index page
    .then((places) => {
      res.render("places/index", { places });
    })
    // to catch any errors
    .catch((err) => {
      console.log(err);
      res.render("error404"); //renders error 404 page
    });
});

router.post("/", (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

router.get("/new", (req, res) => {
  res.render("places/new");
});

router.get("/:id", (req, res) => {
  res.send("GET /places/:id stub");
});

router.put("/:id", (req, res) => {
  res.send("PUT /places/:id stub");
});

router.delete("/:id", (req, res) => {
  res.send("DELETE /places/:id stub");
});

router.get("/:id/edit", (req, res) => {
  res.send("GET edit form stub");
});

router.post("/:id/rant", (req, res) => {
  res.send("GET /places/:id/rant stub");
});

router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("GET /places/:id/rant/:rantId stub");
});

module.exports = router;
