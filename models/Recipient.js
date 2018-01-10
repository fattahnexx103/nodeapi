const mongoose = require('mongoose');
const { Schema } = mongoose;

//sub document of the survey class
const recipientSchema = new Schema({
    email: String,
    responded: {type: Boolean, default: false}
});

module.exports = recipientSchema;
