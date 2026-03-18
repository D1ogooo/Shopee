import { useContext, useState } from "react"
import { AuthContext } from "../../../contexts/AuthContext"
import { Main, SubmitButton, BottomLink, BottomText, Title, Container, Card, Form, InputWrapper, Input, TogglePassword } from "./style"
import { Eye, EyeOff ,KeyRound, Mail } from "lucide-react"
import { Link } from "react-router-dom"

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordTwo, setShowPasswordTwo] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ secondPassord, setSecondPassword] = useState('')
    const { signup } = useContext(AuthContext)

    async function handleSubmit (e) {
     e.preventDefault()
     try {
      await signin(email, password)
      .then((e) => {
	   alert(e.message);
	   navigate("/");
	  })
    } catch (err) {
      console.error("Erro ao logar:", err.message);
      alert(err.message);
    }
    }

    return (
     <Container>
      <Main>
        <Card>
          <Title>SIGN UP</Title>
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
                placeholder="Sua senha..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ paddingRight: 48 }}
              />
              <TogglePassword type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </TogglePassword>
            </InputWrapper>
            <InputWrapper>
              <Input
                as="input"
                type={showPasswordTwo ? 'text' : 'password'}
                placeholder="Confirme sua senha.."
                value={secondPassord}
                onChange={(e) => setSecondPassword(e.target.value)}
                style={{ paddingRight: 48 }}
              />
              <TogglePassword type="button" onClick={() => setShowPasswordTwo(!showPasswordTwo)}>
                {showPasswordTwo ? <EyeOff size={20} /> : <Eye size={20} />}
              </TogglePassword>
            </InputWrapper>
            <SubmitButton type="submit">SIGN UP</SubmitButton>
          </Form>

          <BottomText>
            Novo na Shopee? <BottomLink to="/">Já possui uma conta?</BottomLink>
          </BottomText>
        </Card>
      </Main>
    </Container>
  )
}

export { Signup }