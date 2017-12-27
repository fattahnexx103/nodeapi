const passport = require('passport');

module.exports = (app) =>{

  //authorization route
  app.get('/auth/google',passport.authenticate('google',{
    scope: ['profile','email']
    })
  );

  //handle the callback after login
  app.get('/auth/google/callback',passport.authenticate('google'));

  //get current logged in user info
  app.get('/api/current_user',(req,res) =>{
    res.send(req.user);
  });

  //logout the user
  app.get('/api/logout',(req,res) =>{
    req.logout(); //takes the cookie and kills the id
    res.send(req.user); //this should be undefined if logged out
  });
};
