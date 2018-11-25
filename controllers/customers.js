const Customer = require('../model/customer');

exports.createCustomer = (req,res, next) => {
  
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const middle_name = req.body.middle_name;
    const suffix = req.body.suffix;
    const visa_status = req.body.visa_status;
    const dob = req.body.dob;
    const ssn = req.body.ssn;
    const type_id = req.body.type_id;
    const id_number = req.body.id_number;
    const exp_date = req.body.exp_date;
    const issue_state = req.body.issue_state;
    const street = req.body.street;
    const suite_apt = req.body.suite_apt;
    const zip_code = req.body.zip_code;
    const city = req.body.city;
    const state = req.body.state;
    const email = req.body.email;
    const phone_number = req.body.phone_number;
    const phone_type = req.body.phone_type;
    

    const customer = new Customer({
        first_name:first_name,
        last_name:last_name,
        suffix:suffix,
        middle_name:middle_name,
        identification: {
            visa_status: visa_status,
            dob: dob,
            ssn: ssn,
            type_id: type_id,
            id_number: id_number,
            exp_date: exp_date,
            issue_state : issue_state
        },
        address: {
            street: street,
            suite_apt: suite_apt,
            zip_code: zip_code,
            city: city,
            state: state,
            email: email,
            phone_number: phone_number,
            phone_type:phone_type
        }
    });
    
    customer
        .save()
        .then(result => {
            console.log('New customer created');
            console.log(result._id);
            res.redirect("/checking/application/customerInfo/finances/"+result._id);
        })
        .catch(err => {
            console.log(err);
        });
};

