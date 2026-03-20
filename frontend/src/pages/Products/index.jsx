import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { CornerDownLeft } from 'lucide-react';
import CartIcon from '../../assets/f600cbfffbe02cc144a1.svg'

import {
  Container,
  ProductContent,
  ImageSection,
  InfoSection,
  Title,
  Price,
  Badge,
  ButtonBuy,
  Button,
  ButtonCart
} from "./style";
import { api } from "../../../api/api";

function Products() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { AddItem } = useCart()

  useEffect(() => {
    async function fetchProduct() {
      const res = await api.get(`/products/find/${id}`);
      setProduct(res.data);
    }

    fetchProduct();
  }, [id]);

  if (!product) return <p>Carregando...</p>;

  function handleAddCart(id, image, titulo, valor) {
   AddItem(id, image, titulo, valor)
  }

  return (
    <Container>
      <ProductContent>
        <Button to="/">
          Voltar
         <CornerDownLeft/>
        </Button>
        <div style={{ display: "flex"}}>
          <ImageSection>
          <img src={product.image} alt={product.titulo} />
        </ImageSection>

        <InfoSection>
          {product.indicado && <Badge>Indicado</Badge>}
          <Title>{product.titulo}</Title>
          <Price>R$ {product.valor}</Price>
          <div style={{ 
            display: "flex", 
            gap: "2rem", 
            alignItems: "center",
           }}>
          <ButtonCart onClick={() => handleAddCart(id, image, titulo, valor)}>
            <img src={CartIcon} alt="" />
            Adicionar ao carrinho
          </ButtonCart>
          <ButtonBuy>
            Comprar agora
          </ButtonBuy>
         </div>
        </InfoSection>
       </div>
      </ProductContent>
    </Container>
  );
}

export { Products };