const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users'); //this fetches the users collection

passport.serializeUser((user,done) =>{ //to give the user the token after oauth
  done(null, user.id); //user.id is the id provided by mongoDB or _id in the collection
});

//take id and make it into model
passport.deserializeUser((id,done) =>{
  User.findById(id)
    .then((user) =>{
      done(null,user); //pull out the user from id
    });
});

passport.use(new GoogleStrategy({

  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'

},(accessToken, refreshToken, profile, done)=>{
  //check if user in system
  User.findOne({googleId: profile.id})
    .then((existingUser) =>{
      if(existingUser){
        console.log("User exists");
        done(null,existingUser); //null for everything went fine
      }else{
          new User({googleId: profile.id})
            .save() //make a new user
            .then(user => {
              done(null,user)
            });
      }
    });
  })
);
