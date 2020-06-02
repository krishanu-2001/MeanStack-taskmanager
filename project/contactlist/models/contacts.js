const mongoose = require('mongoose');


const ContactSchema = mongoose.Schema({
    first_name:{
        type: String,
        require: true

    },
    last_name:{
        type: String,
        require: true

    },
    times:{
        type: String,
        require: true

    },
    label:{
        type: String,
        require: true

    },
    completed:{
        type: String,
        require: false

    },
        
});

const Contact = module.exports = mongoose.model('Contact', ContactSchema);
