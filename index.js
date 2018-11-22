const bodyParser            = require('body-parser');
const express               = require('express');
const customerController    = require('./controllers/customers');
const mainRoutes            = require('./routes/main');
const adminRoutes           = require('./routes/admin');
const mongoose              = require('mongoose');

//APP CONFIGURATIONS
var app = express();
    app.set('view engine','ejs');
    app.use(express.static("public"));
    app.use(bodyParser.urlencoded({extended:true})); //needs to go before controllers
    app.use(mainRoutes);
    app.use(adminRoutes);


mongoose.connect("mongodb://localhost/bank_oa",{useNewUrlParser: true});



app.listen(process.env.PORT,process.env.IP,function(){
    console.log('Server established.');
});