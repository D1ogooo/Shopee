const jwt = require('jsonwebtoken')
const { jwt: jwtConfig } = require('../config/auth');

function AuthMiddlare(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(403).json({ error: "Não autorizado" });
  }

  try {
    if (!jwtConfig.secret) {
      return res.status(500).json({ error: "Erro interno" });
    }

    const decoded = jwt.verify(token, jwtConfig.secret);

    req.user = decoded; // 🔥 MUITO útil depois
    next();

  } catch (error) {
    return res.status(401).json({
      error: "Token inválido ou expirado"
    });
  }
}

module.exports = AuthMiddlare;