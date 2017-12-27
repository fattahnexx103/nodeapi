
//logic to figure out dev or prod
if(provcess.env.NODE_ENV == 'production'){
  //production
  module.exports = require('./prod');

}else{
  //dev env
  module.exports = require('./dev');
}
