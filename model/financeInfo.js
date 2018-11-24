const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const financeSchema = new Schema ({
    
    
    employment_status: {
        type: String,
        required: true,
    },
    
    main_income:{
        type: String,
        required: true,
    },
    
    customer_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    }
    
});

module.exports = mongoose.model('FinanceInfo',financeSchema);