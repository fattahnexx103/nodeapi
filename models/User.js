const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
      googleId: String
  }
);

mongoose.model('users', userSchema); //users is name of collection which uses the userSchema
