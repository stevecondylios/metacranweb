var express = require('express');
var router = express.Router();
var get_stats = require('../lib/get_stats');
var top_downloaded = require('../lib/top_downloaded');
var trending = require('../lib/trending');

router.get('/', function(req, res) {

    top_downloaded(function(cb1) {
	trending(function(cb2) {
	    console.log(cb2.map(function(x) { return x.Package; }))
	    res.render('index', { 'downloads': cb1,
				  'trending': cb2
				});
	})
    });

});

module.exports = router;
