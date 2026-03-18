import { Container, Card, Title, Form, InputWrapper, SubmitButton, BottomLink, BottomText, LinksRow, DividerLine, Main, Input, TogglePassword, SmallLink, Divider, DividerText, SocialRow, SocialButton } from "./style";
import { AuthContext } from "../../../contexts/AuthContext.jsx";
import { useState, useContext } from 'react'
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from "react-router-dom";

function Signin() {
  const { signin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     await signin(email, password)
     .then((e) => {
	   alert(e.message || "Usuário authenticado com sucesso!");
	   navigate("/");
	   })
    } catch (err) {
      console.error("Erro ao logar:", err.message);
      alert(err.message);
    }
  };

  return (
     <Container>
      <Main>
        <Card>
          <Title>Log In</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Email/Telefone/Usuário"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputWrapper>
              <Input
                as="input"
                type={showPassword ? 'text' : 'password'}
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ paddingRight: 48 }}
              />
              <TogglePassword type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </TogglePassword>
            </InputWrapper>
            <SubmitButton type="submit">Log In</SubmitButton>
          </Form>

          <BottomText>
            Novo na Shopee? <BottomLink to="/register">Cadastre-se</BottomLink>
          </BottomText>
        </Card>
      </Main>
    </Container>
  );
}

export { Signin };