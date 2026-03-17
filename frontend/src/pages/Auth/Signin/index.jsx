import { Container, Section } from "./style";
import { AuthContext } from "../../../contexts/AuthContext.jsx";
import { useContext } from 'react'
import { Mail } from 'lucide-react';
import { KeyRound } from 'lucide-react';

function Signin() {
  const { signin } = useContext(AuthContext);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await signin(email, password)
      .then((e) => {
	   alert(e.message || "Usuário authenticado com sucesso!");
	   navigate("/");
	  })
    } catch (err) {
      console.error("Erro ao logar:", err.message);
      alert(err.message);
    }
  }

  return (
    <Container>
      <Section>
        <form onSubmit={handleSubmit}>
          <h2>Entrar</h2>
            Email
          <label>
            <span><Mail/></span>
            <input
              type="email"
              placeholder="Seu email..."
            />
          </label>
            Senha
          <label>
            <span><KeyRound/></span>
            <input
              type="password"
              placeholder="Sua senha..."
            />
          </label>
          <button type="submit">Entrar</button>
        </form>
      </Section>
    </Container>
  );
}

export { Signin };