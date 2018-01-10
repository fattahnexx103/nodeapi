const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail{
  constructor({subject, recipients}, content){
    super();

    //sendgrid setup
    this.sgApi = sendgrid(keys.sendGridKey);
    this.from_email = new helper.Email('no-reply@surveyflow.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);

    //add body to the Content
    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  }

  formatAddresses(recipients){
    return recipients.map(({ email }) =>{ // take each email
      return new helper.Email(email); //format the email
    });
  }

  addClickTracking(){
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients(){
    const personalize = new helper.Personalization();
    this.recipients.forEach(recipient =>{ //iterate over list of recipients
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  }


  send(){
    const request = this.sgApi.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON()
    });
    this.sgApi.API(request);
    const response = this.sgApi.API(request);
    return response;
  }
}

module.exports = Mailer;
