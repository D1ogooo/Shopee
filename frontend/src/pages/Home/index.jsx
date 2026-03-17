import { Header } from "../../components/Header"
import { data } from "../../data/a"
import { ButtonProduct,Card, CardPai, Container, Title } from "./style"

function Home() {
    // api.get('/')

    return (
        <>
         <Header />
        <Container>
           <Title>Acesse nossos <span>produtos</span></Title>
            <CardPai>
            {data.map((e) => (
             <Card>
             <img src={e.img} alt="" />
             <h3>{e.indicacao && <span>{e.indicacao}</span>}{e.name}</h3>
             <p>{e.valor}</p>
             {/* <ButtonProduct to={`/product/${}`}>
              Visualizar
             </ButtonProduct> */}
             <ButtonProduct to={`/`}>
              Visualizar
             </ButtonProduct>
             </Card>
            ))}
           </CardPai>
        </Container>
        </>
    )
}

export { Home }