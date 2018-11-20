const express = require('express');

const router = express.Router(); 

router.get("/", function(req,res){
    res.render('main');
});

router.get("/checking",function(req,res){
    res.render('checking');
});


module.exports = router;