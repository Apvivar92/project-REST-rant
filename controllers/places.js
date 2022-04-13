// Add code to create and export an express.Route()
const router = require("express").Router();
const places = require("../models/places.js");
const comments = require("../models/comment.js");
const db = require("../models");

router.get("/", (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render("places/index", { places }); // Render index page
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
      if (err && err.name == "ValidationError") {
        let message = "Validation Error: ";

        //  ToDo: Find all Validation errors
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}.`;
          message += `${err.errors[field].message}`;
        }
        console.log("Validation error message", message);
        res.render("places/new", { message });
      } else {
        res.render("error404");
      }
    });
});

router.get("/new", (req, res) => {
  res.render("places/new");
});

router.get("/:id/comment", (req, res) => {
  db.Place.findById(req.params.id)
    .populate("comments")
    .then((place) => {
      console.log(place.comments);
      res.render("places/show", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

router.post("/:id/comment", (req, res) => {
  console.log(req.body);
  db.Place.findById(req.params.id)
    .then((place) => {
      db.Comment.create(req.body)
        .then((comment) => {
          place.comments.push(comment.id);
          place.save().then(() => {
            res.redirect(`/places/${req.params.id}`);
          });
        })
        .catch((err) => {
          res.render("error404");
        });
    })
    .catch((err) => {
      res.render("error404");
    });
});

router.put("/:id", (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect(`/places/${req.params.id}`);
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

router.delete("/:id", (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
    .then((place) => {
      res.redirect("/places");
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

router.get("/:id/edit", (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      res.render("places/edit", { place });
    })
    .catch((err) => {
      res.render("error404");
    });
});

router.post("/:id/rant", (req, res) => {
  res.send("GET /places/:id/rant stub");
});

router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("GET /places/:id/rant/:rantId stub");
});

module.exports = router;

// router.get("/rand", (req, res) => {
//   db.Place.find().then((places) => {
//     res.render(
//       "places/edit",
//       places[Math.floor(Math.random() * places.length)]
//     );
//   });
//   // res.send(Math.floor(Math.random() * 5).toString());
// });

// router.get("/secret", (req, res) => {
//   res.send("Tonys actual favorite color is blue");
// });

// router.post("/tony", (req, res) => {
//   const content = req.body;
//   res.send("Tony's favorite color is " + content.data);
// });
