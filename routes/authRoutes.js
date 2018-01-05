const passport = require('passport');

module.exports = (app) =>{

  //authorization route
  app.get('/auth/google',passport.authenticate('google',{
    scope: ['profile','email']
    })
  );

  //handle the callback after login
  app.get(
    '/auth/google/callback',passport.authenticate('google'),
    (req,res) =>{
      //send the user here after login
      res.redirect('/surveys');
    }
  );

  //get current logged in user info
  app.get('/api/current_user',(req,res) =>{
    res.send(req.user);
  });

  //logout the user
  app.get('/api/logout',(req,res) =>{
    req.logout(); //takes the cookie and kills the id
    res.redirect('/')
  });
};
