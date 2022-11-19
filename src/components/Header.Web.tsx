import React, { ReactNode } from "react";
import styled from "styled-components";

export interface HeaderProps {}

const Itens = styled.a`
  font-size: 14px;
  color: #171520;
  margin-right: 20px;
  cursor: pointer;
`;

const Header = styled.header`
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
`;

interface LogoProps {
  src: string;
  alt: string;
}

const Logo = styled.img<LogoProps>`
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
  background: "transparent";
`;

const Lupa = styled.img<LogoProps>`
  width: 24px;
  height: 24px;
  margin-left:16px;
  margin-right:12px;
`;

import lupa from "./lupa.svg";

// <input placeholder="Search for products or brands....." type="text" />

import logo from "./logo.svg";

export function HeaderWeb() {
  return (
    <Header>
      <Logo src={logo} alt="logo" />
      <Container>
        <Itens>Handbags</Itens>
        <Itens>Watches</Itens>
        <Itens>Skincare</Itens>
        <Itens>Jewellery</Itens>
        <Itens>Apparels</Itens>
      </Container>
      <InputBox>
        <Lupa src={lupa} alt="lupa" />
        <Input placeholder="Search for products or brands....."/>
      </InputBox>
      
    </Header>
  );
}
