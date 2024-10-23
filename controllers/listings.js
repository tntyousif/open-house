
const express = require('express');
const router = express.Router();

const Listing = require('../models/listing');


router.get('/', async (req, res) => {
    try {
        const listing = await Listing.find();
        console.log(listing);
        res.render('listings/index.ejs');
    } 
    catch(error) {
        console.log(error);
    }
})

router.get('/new', (req, res) => {
    res.render('listings/new.ejs');
});

router.post('/',async (req, res) => {
    req.body.owner = req.session.user._id;
    await Listing.create(req.body);
    res.redirect('/listings');
});

module.exports = router;