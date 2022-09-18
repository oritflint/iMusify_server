const jwt = require("jsonwebtoken")
const secret = process.env.SECRET

function createToken(_id){
        console.log("createToken1")
    return jwt.sign({_id},secret,{expiresIn:"10m"})
}

function validateToken(token) {
    const accessToken = jwt.verify(token, secret);
    return accessToken;
  }

module.exports = {createToken, validateToken}