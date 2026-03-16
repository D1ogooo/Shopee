import { Button, Card, CardPai, Container, Title } from "./style"

function Home() {
    return (
        <Container>
            <Title>Acesse nossos <span>produtos</span></Title>
            <CardPai>
             <Card>
             <img src="br-11134207-7r98o-lp8ryycum8ut4f.webp" alt="" />
             <h3><span>indicado</span>Kit 5 Cueca Samba Canção Masculino Short de Dormir Shortinho Fresquinho e Confortável Pijama</h3>
             <p>R$25,88</p>
             <Button>Visualizar</Button>
             </Card>
             <Card>
             <img src="br-11134207-7r98o-lx2r214gi176d0@resize_w450_nl.webp" alt="" />
             <h3>Kit 3 Calças Masculina Tactel Lisa Com Bolsos Esporte Caminhada Academia Frio</h3>
             <p>R$44,99 - R$50,99</p>
             <Button>Visualizar</Button>
             </Card>
             <Card>
             <img src="br-11134207-7r98o-lwk4zn0e1g1i1b.webp" alt="" />
             <h3><span>indicado</span>Camisa Gola Polo Red Bull Dry fit Premium Lançamento G1 G2 G3 G4</h3>
             <p>R$61,66 - R$66,41</p>
             <Button>Visualizar</Button>
             </Card>
            </CardPai>
        </Container>
    )
}

export { Home }