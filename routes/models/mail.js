const mongoose = require('mongoose');

const MailSchema = mongoose.Schema({
    first_name:{
        type : String,
        required : true
    },
    last_name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
});

const Mail = module.exports = mongoose.model('mail', MailSchema);