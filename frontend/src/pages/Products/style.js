import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1rem;
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
  gap: 2rem;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

export const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
  }
`;

export const InfoSection = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Price = styled.span`
  font-size: 2rem;
  color: #ee4d2d; /* estilo Shopee */
  font-weight: bold;
`;

export const Badge = styled.span`
  background: #ee4d2d;
  color: white;
  padding: 0.3rem 0.6rem;
  font-size: 0.8rem;
  border-radius: 5px;
  width: fit-content;
`;

export const ButtonBuy = styled.button`
  margin-top: 1rem;
  padding: 0.8rem;
  background: #ee4d2d;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #d84326;
  }
`;

export const Button = styled(Link)`
  border: none;
  font-family: "Roboto";
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  border-radius: 20px;
  padding: 1rem;
  height: 30px;
  background-color: #f57224;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
`

export const ButtonCart = styled.button`
  display: "flex";
  gap: 2rem;
  margin-top: 1rem;
  padding: 0.8rem;
  border: solid 1px #d84326;
  background: #ee4d2d42;
  color: white;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
`