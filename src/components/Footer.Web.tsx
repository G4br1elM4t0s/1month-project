import React, { ReactNode } from "react";
import styled, { createGlobalStyle } from "styled-components";

export interface FooterProps { }

const Global = createGlobalStyle`
  body{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
`;

const Footer = styled.footer`
  width: 100%;
  height: 342px;
  background: #1b4b66;
  font-family: "Inter", sans-serif;
  display:flex;
  justify-content: space-between;
  
  padding: 0 62px 0 62px;
`;

const Container = styled.div`
  display: flex;
`;

const ConteudoDestaque = styled.p`
  color: #fff;
  font-size: 16px;
  line-height: 22px;
  margin:0;
  margin-bottom: 12px;
`;

const ConteudoTotal = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
`

const Conteudo = styled.p`
  color: #b6b6b6;
  font-size: 16px;
  line-height: 22px;
  margin:0;
  margin-bottom: 8px;
  
`;

const Content = styled.div``;
const Content2 = styled.div`
  width: 107px;
  height: 202px;
  margin-right:83px;
`;

const ContentEspecial = styled.div`
  width: 125px;
  height: 202px;
  margin-right:83px;
`;


const RedeSocialBox = styled.div`
  display: flex;
  margin-top:49px;
`;

const RedeSocial = styled.img`
  width:38px;
  height: 38px;
  margin-left:16px;
`

const LocalBox = styled.div`
  display:flex;
  align-items: center;
  margin-top:20px;
  margin-bottom:10px;
  img{
    width:15px;
    height:19px;
    margin-right:8px;
  }
  h3{
    font-weight: 500;
    font-size: 14px;
    color: #FFFFFF;
    font-family: "Inter", sans-serif;
    margin:0;
   
  }
`

const CopyBox = styled.div`
  display:flex;
  align-items: center;
  align-self: flex-end;
 
  p{
    margin:0;
    font-weight: 500;
    font-size: 14px;
    color: #B6B6B6;
  }
`

const Box = styled.div`
  display:flex;
  flex-direction:column;
  align-items: flex-end;
 
  `


// © 2021 | Cora Leviene All Rights Reserved

import location from './img/location.png';

import facebook from './img/fblogo.png'
import instagram from './img/instagram.png'
import twitter from './img/twitter.png'
import youtube from './img/youtube.png'



export function FooterWeb() {
  return (
    <>
      <Global />
      <Footer>

        <ConteudoTotal>
          <Content>
            <ConteudoDestaque>Shop by Category</ConteudoDestaque>
            <Content2>
              <Conteudo>Skincare</Conteudo>
              <Conteudo>Personal Care</Conteudo>
              <Conteudo>Handbags</Conteudo>
              <Conteudo>Apparels</Conteudo>
              <Conteudo>Watches</Conteudo>
              <Conteudo>Eye Wear</Conteudo>
              <Conteudo>Jewellery</Conteudo>
            </Content2>
          </Content>
          <Content>
            <ConteudoDestaque>About</ConteudoDestaque>
            <Content2>
              <Conteudo>Contact Us</Conteudo>
              <Conteudo>About Us</Conteudo>
              <Conteudo>Careers</Conteudo>
              <Conteudo>Press</Conteudo>
            </Content2>
          </Content>
          <Content>
            <ConteudoDestaque>Policy</ConteudoDestaque>
            <ContentEspecial>
              <Conteudo>Return Policy</Conteudo>
              <Conteudo>Terms of Use</Conteudo>
              <Conteudo>Sitemap</Conteudo>
              <Conteudo>Security</Conteudo>
              <Conteudo>Privacy</Conteudo>
              <Conteudo>EPR Compliance</Conteudo>
            </ContentEspecial>
          </Content>
        </ConteudoTotal>
        <Box>
          <RedeSocialBox>
            <RedeSocial src={facebook} />
            <RedeSocial src={instagram} />
            <RedeSocial src={twitter} />
            <RedeSocial src={youtube} />
          </RedeSocialBox>

          <LocalBox>
            <img src={location} alt="teste" />
            <h3>United States</h3>
          </LocalBox>
          <CopyBox>
            <p>© 2021 | Cora Leviene All Rights Reserved</p>
          </CopyBox>
        </Box>
      </Footer>
    </>
  );
}