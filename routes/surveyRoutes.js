const mongoose = require('mongoose');
const express = require('express');
const requireLogin = require('../middleware/requireLogin');
const requireCredits = require('../middleware/requireCredits');
const Survey = mongoose.model('surveys');
const Mailer = require('../services/Mailer');
const surveyTemplate  = require('../services/emailTemplates/surveyTemplate');


module.exports = (app) =>{

  app.get('/api/surveys/thankyou',(req,res) =>{
    res.send('Thanks for voting!!');
  })

  app.post('/api/surveys',requireLogin, requireCredits, (req,res) =>{
    //create a survey
    //make sure user is logged in
    //make sure user has enough credits to send survey
    const  {title, subject, body, recipients } = req.body; //pass along these properties

    const survey = new Survey({
      title: title,
      subject: subject,
      body: body,
      recipients: recipients.split(',').map(email =>{return { email: email.trim() }}), //split arrays and get email object individually
      _user: req.user.id,
      dateSent: Date.now()
    });

    //Send an email using mailer
    const mailer = new Mailer(survey, surveyTemplate(survey));

  try{
    mailer.send();
    survey.save();
    req.user.credits -= 1;
    const user = req.user.save(); // the updated user

    res.send(user);
  }catch(err){
    res.status(422).send(err);
  }
  });
};
