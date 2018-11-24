const Customer = require('../model/customer');



exports.updateAgreement = (req,res,next ) => {
    
    const signature = req.body.signature;
    const signDate = req.body.sign_date;
    const customerId= req.params.id;
    
    console.log(signature);
    console.log(customerId);
    
    Customer.findById(customerId,function (err, customer){
        
        if(err || !customer){
            console.log("Problem finding customer");
        } else {
            customer.signature = signature;
            customer.signDate = signDate;
            
            customer
                .save()
                .then(result => {
                    console.log('Agreements updated');
                    res.redirect("/checking/application/customerInfo/finances/"+result._id+"/agreements/deposit");
                })
                .catch(err => {
                console.log(err);
            });
        }
    });
};