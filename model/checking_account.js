const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const checking_accountSchema = new Schema({
    
    min_deposit:{
        type: Number,
        required: true,
        default: 25,
    },
    
    initial_deposit:{
        type: Number,
        required: true,
    },
    
    monthly_Fee:{
        type: Boolean,
        default: true,
    },
    
    interest_Rate:{
        type: Number,
        default: 1.0,
    },
    
    account_id:{
        type:Schema.Types.ObjectId,
        ref:'Account',
    }
    
    
});

module.exports = mongoose.model('Checking_Account',checking_accountSchema);
