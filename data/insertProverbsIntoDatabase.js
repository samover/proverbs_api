var mongoose = require("mongoose");
var assert = require("assert");
var config = require("./config");
var fs = require("fs");
var data = require('./proverbs.json');

mongoose.connect(config.database);

var Schema = mongoose.Schema
var proverbSchema = new Schema({
  proverb: String,
})

var Proverb = mongoose.model('Proverb', proverbSchema)

Proverb.collection.insert(data, function(err, proverbs) {
  if (err) {
    console.log(err)
  } else {
    console.log("proverbs inserted");
  }
})
