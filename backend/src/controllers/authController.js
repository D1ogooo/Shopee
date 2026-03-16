const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../model/usersModel");

class AuthController {
    
    async signin() {
     const { email, password } = req.body;
     
     const findEmail = User.findOne({ email })
     if(!findEmail) {
      throw new Error('Email inválido')
     }
     
     const verify = bcrypt.compare(password, findEmail.password)
     if(!verify) {
      throw new Error('Senha inválida') 
     }
     
      const secret = process.env.SECRET_KEY;
      if (!secret) {
        throw new Error('Secret not found');
      }

      const token = jwt.sign({ id: findEmail.id }, secret, { expiresIn: "1d" }) 

      res.status(200).json({ "sucesso!": token })
    }

    async signup() {
     const { name, email, password } = req.body;
      
     const findEmail = User.findOne({ email })
     if(findEmail) {
      throw new Error('Email já está sendo utilizado')
     }
     
     try {
      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(password, salt);

      const newUser = new User({ name, email, password: passwordHash });
      await newUser.save();

        res.json({ "sucesso!": "Usuário criado" })
     } catch (error) {
        res.json({ error: "falha ao criar usuário" }, error)
     }

    }

}

module.exports = new AuthController()