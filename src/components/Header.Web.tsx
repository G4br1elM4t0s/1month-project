import React, { ReactNode } from "react";
import styled from "styled-components";

export interface HeaderProps {}


const Itens = styled.a`
  font-size: 14px;
  color: #171520;
  margin-right: 20px;
  cursor: pointer;
  a{
    text-decoration:none;
    color:black;
  }
`;
const Header = styled.header`
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  font-family:'Inter', sans-serif;
  justify-content: space-around;
  background: white;
  
`;

const Container = styled.div`
  display: flex;
`;

const Logo = styled.img`
  width: 108px;
  height: 22px;
  margin-right: 33px;
`;

const InputBox = styled.div`
  width:362px;
  height:44px;
  display: flex;
  align-items: center;
  background-color: #F1F1F1;
  border-radius:4px;
`;

const Input = styled.input`
  width:362px;
  height:42px;
  border-radius:4px;
  background-color: #F1F1F1;
  type: "text";
  font-size: 14px;
  border: none;
  outline: none;
  background: "transparent";
`;

const Lupa = styled.img`
  width: 24px;
  height: 24px;
  margin-left:16px;
  margin-right:12px;
`;

const ContainerUtils = styled.div`
  display: flex;
  margin-left:24px;
  align-items:center;
  margin-right:18px;
`;

const Bag = styled.img`
  width: 24px;
  height: 24px;
  cursor:pointer;
`

const Perfil = styled.img`
  width: 18px;
  height: 17px;
  margin-right:23px;
  cursor:pointer;
`

const Curtida = styled.img`
  width: 19px;
  height: 17px;
  margin-right:23px;
  cursor:pointer;
`

const Body = styled.body`
    padding:0;
    margin:0;
    box-sizen:border-box;
`

import lupa from "./img/lupa.svg";
import bolsa from "./img/icon/bag.svg";
import perfil from "./img/icon/profile.svg";
import curtida from "./img/icon/wishlist.svg";
import logo from "./img/logo.png";

export function HeaderWeb() {
  return (
    <Body>
    <Header>
      <a href="/"><Logo src={logo} alt="logo" /></a>
      <Container>
        <Itens><a href="/HomeCategory">Handbags</a></Itens>
        <Itens>Watches</Itens>
        <Itens>Skincare</Itens>
        <Itens>Jewellery</Itens>
        <Itens>Apparels</Itens>
      </Container>
      <InputBox>
        <Lupa src={lupa} alt="lupa" />
        <Input placeholder="Search for products or brands....."/>
      </InputBox>
      <ContainerUtils>
      <Curtida src={curtida} alt="curtida"></Curtida>
      <Perfil src={perfil} alt="perfil"></Perfil>
      <Bag src={bolsa} alt="bolsa"></Bag>
      </ContainerUtils>
    </Header>
    </Body>
  );
}