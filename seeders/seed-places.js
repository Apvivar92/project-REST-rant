// require models folder to give CRUD access to database in models
const db = require("../models");

// create a new place with create(). Pass in an array to create multiple places at once.
db.Place.create([
  {
    name: "H-Thai-ML",
    city: "Seattle",
    state: "WA",
    cuisines: "Thai, Pan-Asian",
    pic: "/images/h-thai-ml-tables.jpg",
    foundesd: 1989,
  },
  {
    name: "Coding Cat Cafe",
    city: "Phoenix",
    state: "AZ",
    cuisines: "Coffee, Bakery",
    pic: "/images/coffee-cat.jpg",
    founded: 2020,
  },
])

  // "Promise logic" for when create resolves
  // for success
  .then(() => {
    console.log("Success!");
    process.exit(); //To close process
  })

  // for fail
  .catch((err) => {
    console.log("Failure!", err);
    process.exit(); // To close process
  });
