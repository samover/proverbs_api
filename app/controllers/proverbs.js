var Proverb = require('../models/proverb');

var proverbs = {
  getRandomOne: function(req, res) {
    Proverb.count().exec(function(err, count) {
      if (err)
        res.send(err);
      var random = Math.floor(Math.random() * count);
      Proverb.findOne().skip(random).exec(function(err, proverb) {
        if (err)
          res.send(err);
        res.json(proverb);
      });
    });
  }
}

module.exports = proverbs;
