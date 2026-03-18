const jwt = require('jsonwebtoken')
const { jwt: jwtConfig } = require('../config/auth');

function AuthMiddlare(req, res, next) {
 const authHeader = req.headers['authorization'];
 const token = authHeader && authHeader.split(' ')[1]

 if(!token) {
    res.status(403).json({ "error": "Não autorizado" });
 }

 try {

   if(!jwtConfig.secret) {
    throw new Error({ "error": "Não autorizado" });
   }
   jwt.verify(token, jwtConfig.secret)
   next();
 } catch (error) {
    throw new Error({ "error": error });
 }
}

module.exports = AuthMiddlare;