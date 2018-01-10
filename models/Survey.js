const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema  = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema], //an array of strings
  yes: { type: Number, default: 0},
  no: { type: Number, default: 0},
  _user: {type: Schema.Types.ObjectId, ref: 'User'}, //to get the userId from the user to see which user
  dateSent: Date,
  lastResponded: Date
});

mongoose.model('surveys',surveySchema);
