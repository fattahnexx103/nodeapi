
//logic to figure out dev or prod
if(process.env.NODE_ENV === 'production'){
  //production
  module.exports = require('./prod');

}else{
  //dev env
  module.exports = require('./dev');
}
