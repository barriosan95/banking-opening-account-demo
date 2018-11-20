const express = require('express');


const mainRoutes = require('./routes/main');

//APP CONFIGURATIONS
var app = express();
    app.use(mainRoutes);





app.listen(process.env.PORT,process.env.IP,function(){
    console.log('Server established.');
});