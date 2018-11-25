const Account = require('../model/account');
const CheckingAccount = require('../model/checking_account');


exports.createAccount = (req,res,next) => {
    
    //get info
    const customer_id = req.params.id;
    const initial_deposit = req.body.initial_deposit;
    
    //create main account
    const account = new Account({
        balance: initial_deposit,
        customer_id: customer_id,
       
    });
    
    account
        .save()
        .then(result => {
            console.log('New account created.');
            const account_id = result.id;
            
            //create checking account
            const checking_account = new CheckingAccount({
                initial_deposit: initial_deposit,
                account_id: account_id,
            });
            
            //save checking account
            checking_account
                .save()
                .then(result => {
                    console.log('Checking account created.');
                    res.redirect("/checking/application/customerInfo/finances/agreements/"+customer_id+"/deposit/success");
                })
                .catch(err => {
                    console.log(err);
                });
            
        })
        .catch(err => {
            console.log(err);
        });
    

    
}
