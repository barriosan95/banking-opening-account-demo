const FinanceInfo= require('../model/financeInfo.js');


exports.addFinInfo = (req,res, next) => {
  
    const employment_status = req.body.employment_status;
    const main_income = req.body.main_income;
    const customer_id = req.params.id;

    

    const financeInfo = new FinanceInfo({
        employment_status: employment_status,
        main_income: main_income,
        customer_id: customer_id,
       
    });
    
    financeInfo
        .save()
        .then(result => {
            console.log('New financial record created.');
            res.redirect("/checking/application/customerInfo/finances/"+ customer_id +"/agreements");
        })
        .catch(err => {
            console.log(err);
        });
};