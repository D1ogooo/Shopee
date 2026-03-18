import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  min-height: 100vh;
  background: #ee4d2d;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  padding: 16px 24px;
`;

export const HeaderInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: #fff;
`;

export const LogoText = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #fff;
`;

export const HeaderTitle = styled.span`
  font-size: 20px;
  color: #fff;
`;

export const Main = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 16px;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 420px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  padding: 32px;
`;

export const Title = styled.h2`
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 500;
  color: #222;
  margin-bottom: 24px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s;

  &:focus {
    border-color: #ee4d2d;
  }

  &::placeholder {
    color: #999;
  }
`;

export const TogglePassword = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #999;
  padding: 0;
  display: flex;

  &:hover {
    color: #555;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 48px;
  background: #ee4d2d;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #d73211;
  }
`;

export const LinksRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
`;

export const SmallLink = styled(Link)`
  font-size: 13px;
  color: #ee4d2d;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #d73211;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0;
`;

export const DividerLine = styled.div`
  flex: 1;
  height: 1px;
  background: #ddd;
`;

export const DividerText = styled.span`
  padding: 0 16px;
  font-size: 13px;
  color: #999;
`;

export const SocialRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

export const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 44px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  font-size: 14px;
  color: #222;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #f5f5f5;
  }
`;

export const BottomText = styled.p`
  text-align: center;
  font-size: 14px;
  color: #999;
  margin-top: 32px;
`;

export const BottomLink = styled(Link)`
  color: #ee4d2d;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: #d73211;
  }
`;