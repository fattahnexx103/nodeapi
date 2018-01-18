const keys = require('../../config/keys');

module.exports = (survey) =>{
  //contain the html
  return `
    <html>
      <body>
        <div style = "text-align: center;">
        <h3>I would like your input</h3>
        <p>Please answer the following question: </p>
        <p>${survey.body}</p>
        <div>
          <a href="${keys.redirectDomain}/api/surveys/thankyou">Yes</a>
        </div>
        <div>
          <a href="${keys.redirectDomain}/api/surveys/thankyou">No</a>
        </div>
      </div>
    </body>
  </html>
  `;
};