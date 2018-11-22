const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const customerSchema = new Schema({
    
    first_name :{
        type: String,
        required: true,
    },
    
     last_name :{
        type: String,
        required: true,
    },
    
    middle_name: {
        type: String,
        required: false,
    },
    
    suffix: {
        type: String,
        required: false,
    },
    
    identification: {
        visa_status: { type: String, required: true },
        dob: {type: Date, required: true},
        ssn: {type: Number, required: true},
        type_id: {type: String, required: true},
        id_number: {type: String, required: true},
        exp_date: {type: Date, required: true},
        issue_state: {type: String, required: true},
    },
    
    address : {
        street: { type: String, required: true},
        suite_apt: { type: String, required: false},
        zip_code: { type: Number, required: true},
        city: {type: String, required: true},
        state: { type: String, required: true},
        email: { type: String, required: true},
        phone_number: {type: Number, required: true},
        phone_type: {type: String, required: true},
    }
    
    
});


module.exports = mongoose.model('Customer',customerSchema);
