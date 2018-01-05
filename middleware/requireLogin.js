module.exports = (req,res,next) =>{

  if(!req.user){
    //user not logged in
    return res.status(401).send({ error: 'You must log in!'});
  }
  next(); //if user is successful
};
