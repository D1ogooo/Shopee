const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../model/usersModel");

class AuthController {

  async signin(req, res) {
    const { email, password } = req.body;

    const findEmail = await User.findOne({ email });
    if (!findEmail) {
      return res.status(400).json({ error: 'Email inválido' });
    }

    const verify = await bcrypt.compare(password, findEmail.password);
    if (!verify) {
      return res.status(400).json({ error: 'Senha inválida' });
    }

    const secret = process.env.SECRET_KEY;

    const token = jwt.sign({ id: findEmail.id }, secret, { expiresIn: "1d" });

    res.status(200).json({
      token,
      user: {
       id: findEmail.id,
       email: findEmail.email
      }
    });
  }

  async signup(req, res) {
    const { name, email, password } = req.body;

    const findEmail = await User.findOne({ email });
    if (findEmail) {
      return res.status(400).json({ error: 'Email já está sendo utilizado' });
    }
    
    const passwordHash = await bcrypt.hash(password, 12);

    const newUser = new User({ name, email, password: passwordHash });
    await newUser.save();

    res.json({ message: "Usuário criado" });
  }
}

module.exports = new AuthController();