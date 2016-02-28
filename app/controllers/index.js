var express = require("express");
var router = express.Router();
var proverbsController = require('./proverbs');

router.route('/proverb').get(proverbsController.getRandomOne);

module.exports = router;
