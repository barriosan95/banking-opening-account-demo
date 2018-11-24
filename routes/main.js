const express = require('express');
const router = express.Router(); 

router.get("/", function(req,res){
    res.render('main');
});

router.get("/checking",function(req,res){
    res.render('checking');
});

router.get("/savings",function(req,res){
    res.render('savings');
});

router.get("/checking/application",function(req,res){
   res.render('checking_app'); 
});

router.get("/checking/application/customerInfo",function(req,res){
   res.render('info_app'); 
});

router.get("/checking/application/customerInfo/finances/:id", function(req,res){
    res.render('finances_app',{req:req});
});

router.get("/checking/application/customerInfo/finances/:id/agreements", function(req,res){
    res.render('agreement_app',{req:req});
});

router.get("/checking/application/customerInfo/finances/:id/agreements/deposit", function(req,res){
    res.render('deposit_app');
});

router.get("/checking/application/customerInfo/finances/agreements/deposit/success", function(req,res){
    res.render('success_app');
});


module.exports = router;