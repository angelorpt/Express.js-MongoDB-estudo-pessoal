const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var Person = new mongoose.Schema({
    name:{
        firstName: {
            type: String,
            required: true,
        }, 
        lastName: {
            type: String,
            required: true,
        }        
    },
    age:{
        type: Number,
        required: true,
    },
    date:{
        type: String,
        default: Date.now()
    },
});

//Export the model
module.exports = mongoose.model('Person', Person);