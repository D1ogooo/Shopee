import { useProcuts } from "../../hooks/useProducts"
import { Header } from "../../components/Header"
import { FooterComponent } from '../../components/Footer'
import { data } from "../../data/a"
import { ButtonProduct,Card, CardPai, Container, Title } from "./style"

function Home() {
    const { filteredProducts } = useProcuts()

    return (
      <>
         <Container>
           <Title>Acesse nossos <span>produtos</span></Title>
            <CardPai>
            {filteredProducts.map((e) => (
             <Card key={e._id}>
           
             <img src={e.image} alt="" />
             <h3>{e.indicado && <span>indicado</span>}{e.titulo}</h3>
             <p>R$ {e.valor}</p>
             <ButtonProduct to={`/product/${e._id}`}>
              Visualizar
             </ButtonProduct>
             </Card>
            ))}
           </CardPai>
        <FooterComponent />
         </Container>
      </>
    )
}

export { Home }