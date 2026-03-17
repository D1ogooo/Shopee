import styled from "styled-components";

export const Container = styled.div`
 width: 90%;
 margin: 0 auto;
 display: flex;
 align-items: center;
`

export const Input = styled.input`
  height: 2.5rem;
  padding-left: .5rem;
  display: block;

  flex: 1;
  min-width: 0; 

  border: .0625rem solid #d1d5db;
  border-radius: .375rem;
  box-shadow: 0 .0625rem .125rem rgba(0, 0, 0, 0.05);

  outline: none;

  &:focus {
    border-color: #f5b301;
    box-shadow: 0 0 0 .125rem rgba(245, 179, 1, 0.4);
  }
`;

export const Button = styled.button`
 margin-left: 1rem;
  height: 2.5rem;
  width: 2.5rem;
  background-color: #ec5638ff;
  cursor: pointer;
  border: solid .0625rem #ffffff67;
  border-radius: .3125rem;

  &:hover {
   transition: 200ms all;
   background-color: #fb6345ea;
  }
`

export const Header = styled.header`
  width: 100%;
  height: 60px;
  background-color: #FA4F30;
  display: flex;
  align-items: center;
  padding: 0 1rem;

  section {
    padding: 1.4rem;
    width: 7.5rem;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
  }
  
  nav {
   display: flex;
   align-items: center;
   justify-content:center;
   flex: 1;
  }
`;