
const jwt = require("jsonwebtoken");
const authJWT = (req,res, next)=>{
    const authHeader = req.headers.authorization;
    if(authHeader){
        const Token = authHeader.split(" ")[1];
        jwt.verify(Token, process.env.SECRET_JWT, (err,verifyToken)=>{
            if(err){
                   return res.sendStatus(403);
            }
            req._id=verifyToken._id;
            next();
        });
    }
    else{
        res.sendStatus(401);
    }
}

module.exports = {authJWT}