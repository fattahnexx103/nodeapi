const express = require('express');
const mongoose =  require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

require('./models/User.js'); //make sure this goes first
require('./services/passportService.js'); //since we not using it in a variable
require('./models/Survey'); // not using module.exports

const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes.js');
const billingRoutes = require('./routes/billingRoutes.js');
const surveyRoutes = require('./routes/surveyRoutes.js');

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
surveyRoutes(app);


//only for deployment purposes
if(process.env.NODE_ENV === 'production'){
  //Express will serve up production assets like main.js or main.css profile
  app.use(express.static('client/build'));
  //Express will serve up index.html file if it doesnt recognize route
  const path = require('path');
  app.get('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
  });

}

app.get('/', (req,res) =>{
  res.send(
    {hi: 'there'}
  );
});

console.log(process.env.NODE_ENV);

const PORT = process.env.PORT || 5001; //for heroku port or use default port
app.listen(PORT);
