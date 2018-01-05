const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
      googleId: String,
      credits: {
        type: Number,
        default: 0
      }, //for stripe
  }
);

mongoose.model('users', userSchema); //users is name of collection which uses the userSchema
