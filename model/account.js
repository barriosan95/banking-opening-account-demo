const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const accountSchema = new Schema({
    
    balance:{
        type: Number,
        required: true,
    },
    
    fdic:{
        type: Boolean,
        default: true,
    },
    
    customer_id:{
        type: Schema.Types.ObjectId,
        ref: 'Customer',
    }
    
    
});

module.exports = mongoose.model("Account",accountSchema);