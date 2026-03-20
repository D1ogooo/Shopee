import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CornerDownLeft } from 'lucide-react';

import {
  Container,
  ProductContent,
  ImageSection,
  InfoSection,
  Title,
  Price,
  Badge,
  ButtonBuy,
  Button
} from "./style";
import { api } from "../../../api/api";

function Products() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const res = await api.get(`/products/find/${id}`);
      setProduct(res.data);
    }

    fetchProduct();
  }, [id]);

  if (!product) return <p>Carregando...</p>;

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

          <ButtonBuy>Comprar agora</ButtonBuy>
        </InfoSection>
        </div>
      </ProductContent>
    </Container>
  );
}

export { Products };