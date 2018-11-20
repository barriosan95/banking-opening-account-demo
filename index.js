const express = require('express');


const mainRoutes = require('./routes/main');

//APP CONFIGURATIONS
var app = express();
    app.set('view engine','ejs');
    app.use(express.static("public"));
    app.use(mainRoutes);





app.listen(process.env.PORT,process.env.IP,function(){
    console.log('Server established.');
});