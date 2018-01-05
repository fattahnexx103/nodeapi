const express = require('express');
const mongoose =  require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
require('./models/User.js'); //make sure this goes first
require('./services/passportService.js'); //since we not using it in a variable
const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes.js');
const billingRoutes = require('./routes/billingRoutes.js');

mongoose.connect(keys.mongoURI); //connects to mongo

const app = express();

//Middleware 
app.use(bodyParser.json());

app.use(
  cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000, //cookie to last for 30 days
      keys: ['454bsdhfdfdfdgff565576fgfhgj']
  })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app); //uses the app from the file and attaches express to it
billingRoutes(app);

app.get('/', (req,res) =>{
  res.send(
    {hi: 'there'}
  );
});

console.log(process.env.NODE_ENV);

const PORT = process.env.PORT || 5001; //for heroku port or use default port
app.listen(PORT);
