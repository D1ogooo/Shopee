import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
 width: 90%;
 margin: 0 auto;
`

export const Section = styled.section`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 100vh;
 margin: 0 auto;

 form {
  width: 15.5rem; 
  display: flex;
  flex-direction: column;
  gap: .5rem;

  label {
   display: flex;
   gap: .4rem;
   padding-left: 5px;
   padding-top: 5px;
   border: solid .0625rem #1b191985;
  }

  input[type="email"]{
   width: 14.375rem;
   height: 1.75rem;
   padding-left: 4px;
   border: none;
  }

  input[type="password"]{
   width: 14.375rem;
   height: 1.75rem;
   border: none;
  }

  button {
   width: 15.5rem;
   height: 28px;
   background-color: #EE4D2D;
   border: none;
   border-radius: .125rem;
   color: #fff;
   
   &:hover {
    background-color: #F05D40;
    cursor: pointer;
   }
  }

  h2 {
   font-family: "Roboto";
   font-weight: 500;
   font-width: 12.5rem;
   font-height: 3.125rem;
  }

 }
`