import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
 width: 90%;
 margin: 0 auto;
`

export const Title = styled.h2`
 width: 15rem;
 height: 30px;
 color: #000;
 margin: 0 auto;
 margin-top: 10rem;

 span {
  color: red;
 }
`

export const CardPai = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  gap: 1rem;
  flex-wrap: wrap;
`

export const Card = styled.div`
  width: 350px;
  padding: 1rem;
  gap: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  font-family: Arial, sans-serif;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: transform 0.2s;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  img {
   width: 100px
  }

  h3 {
   span {
    background-color: #f57224;
    font-family: "Arial" sans-serif ;
   }
  }

  p {
   font-weight: 600;
   color: #f57224;
  }
`

export const ButtonProduct = styled(Link)`
  background-color: #f57224;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;

 :hover {
  background-color: #e0601b;
 }
`
