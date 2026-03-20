import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
//  width: 90%;
 margin: 0 auto;
 margin-bottom: 10rem;
`

export const Title = styled.h2`
 font-family: 'Roboto';
 width: 17rem;
 height: 30px;
 color: #000;
 margin: 0 auto;
 margin-top: 5rem;

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
  align-items: center;
`

export const Card = styled.div`
  width: 21.875rem;
  padding: 1rem;
  gap: 1rem;
  border: 1px solid #ddd;
  border-radius: .5rem;
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
    padding-left: .1875rem;
    padding-right: .1875rem;
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