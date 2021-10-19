const mongoose = require('mongoose');
require('mongoose-double')(mongoose);

var SchemaTypes = mongoose.Schema.Types;

const userPolicySchema = new mongoose.Schema({
    agent: {
        type: String,
        required: true
    },
    userType:{
        type: String,
        required: true
    },
    policy_mode:{
        type: Number,
        required: true
    },
    producer:{
        type: String,
        required: true
    },
    policy_number:{
        type: String,
        required: true
    },
    premium_amount:{
        type: SchemaTypes.Double,
        required: true
    },
    policy_type:{
        type: String,
        required: true
    },
    company_name:{
        type: String,
        required: true
    },
    category_name:{
        type: String,
        required: true
    },
    policy_start_date:{
        type: Date,
        required: true
    },
    policy_end_date:{
        type: Date,
        required: true
    },
    csr:{
        type: String,
        required: true
    },
    account_name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    gender:{
        type: String
    },
    firstname:{
        type: String,
        required: true
    },
    city:{
        type: String
    },
    account_type:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    address:{
        type: String
    },
    state:{
        type: String
    },
    zip:{
        type: String
    },
    dob:{
        type: Date,
        required: true
    }
},
{timestamps: true});

module.exports = mongoose.model('UserPolicy', userPolicySchema);