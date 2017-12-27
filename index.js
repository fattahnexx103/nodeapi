const express = require('express');
const mongoose =  require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models/User.js'); //make sure this goes first
require('./services/passportService.js'); //since we not using it in a variable
const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes.js');

mongoose.connect(keys.mongoURI); //connects to mongo

const app = express();
app.use(
  cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000, //cookie to last for 30 days
      keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app); //uses the app from the file and attaches express to it

app.get('/', (req,res) =>{
  res.send(
    {hi: 'there'}
  );
});

const PORT = process.env.PORT || 5000; //for heroku port or use default port
app.listen(PORT);
