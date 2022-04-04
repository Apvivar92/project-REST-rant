// module.exports = [{
//   name: 'H-Thai-ML',
//   city: 'Seattle',
//   state: 'WA',
//   cuisines: 'Thai, Pan-Asian',
//   pic: '/images/h-thai-ml-tables.jpg'
// }, {
//   name: 'Coding Cat Cafe',
//   city: 'Phoenix',
//   state: 'AZ',
//   cuisines: 'Coffee, Bakery',
//   pic: '/images/coffee-cat.jpg'
// }]

// require Mongoose
const mongoose = require("mongoose");

// Declare Schema for defining a place.
const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, require: true },
  city: { type: String, default: "Anytown" },
  state: { type: String, default: "USA" },
  founded: Number,
});

// showEstablished() to combine everything within placeSchema
placeSchema.methods.showEstablished = function () {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`;
};

// Export
module.exports = mongoose.model("Place", placeSchema);
