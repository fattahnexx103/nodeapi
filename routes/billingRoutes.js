const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middleware/requireLogin');

module.exports = app => {

  app.post('/api/stripe', requireLogin,(req,res) =>{
      //handle the token, reach stripe api and
        // console.log(req.body);
        stripe.charges.create({
          amount: 500,
          currency: 'usd',
          description: '$5 for 5 credits',
          source: req.body.id
        },function(err,charge){
          console.log(charge);
        });
        //after we get the token back with the credits
        req.user.credits += 5; //add 5 creds
        const user = req.user.save();
        res.send(user);
        console.log(user);
  });
};
