let express = require('express');
let router = express.Router();
let connection = require('../database.js');


router.get('/', function(req, res, next) {

    connection.query('SELECT keyword FROM keywords', function(err, rows) {
        if (err) {
            req.flash('error', err);
            res.render('list', { page_title: "Generator", data: '' });
        } else {
            res.render('list', { page_title: "Generator", data: rows });


        }

    });

});

module.exports = router;