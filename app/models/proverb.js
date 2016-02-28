var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var proverbSchema = new Schema({
  proverb: String
});

module.exports = mongoose.model('Proverb', proverbSchema);
