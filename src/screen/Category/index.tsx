import React from "react";
import styled from "styled-components";
import { HeaderWeb } from "../../components/Header.Web";

const BannerPrincipal = styled.div`
  width: 98%;
  height: 400px;
  background: red;
  margin: 0 auto;
  border-radius: 24px;
  margin-bottom: 68px;
`;

const SectionContent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom:30px;
`;

const FilterBar = styled.div`
display:flex;
flex-direction: column;
  width: 17%;
  align-self: start;
  height: 100%;
  margin-right: 13px;
`;

const Content = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-around;

`;

const Card = styled.div`
  width: 286px;
  margin-bottom: 64px;
`;
const Description = styled.div`
  div {
    display: flex;
    justify-content: space-between;
  }
  img{
    width:18px;
    height:17px;
  }
`;

const Avaliacao = styled.div`
  display: flex;
`;

const Estrela = styled.div`
  display: flex;
`;

const Price = styled.div`
  display: flex;
`;

const ChecksBox = styled.div`
  
`

const CheckContent = styled.div`
  display:flex;
  margin-bottom:10px;
`

const Tags = styled.div`
  display:flex;
  border-bottom: 1px solid gray;
  margin-bottom:15px;
`


import { FooterWeb } from "../../components/Footer.Web";
import { CardWrapper } from "../../components/Card";

import bolsa2 from './bolsa2.png'
import bolsa from "./bolsa1.png";
import like from "../../components/img/coracao.png";
import estrela from "./icon/Vector-1.png";
import estrela2 from "./icon/Vector-1.png";
import plus from "../../components/img/plus.png";
import minus from "../../components/img/small-minus.png";
import { Link, useHref } from "react-router-dom";
export function Category() {
  const contentCard = [
    {
    img:bolsa2,
    nome:"Remus",
    tipo:"Brown Strap Bag",
    price: "$57.00",
    oPrice: "$78.66"

  },
  {
    img:bolsa,
    nome:"Grande",
    tipo:"Blossom Pouch",
    price: "$39.49",
    oPrice: "$78.66"

  },
  {
    img:bolsa,
    nome:"Grande",
    tipo:"Blossom Pouch",
    price: "$39.49",
    oPrice: "$78.66"

  },
  {
    img:bolsa,
    nome:"Grande",
    tipo:"Blossom Pouch",
    price: "$39.49",
    oPrice: "$78.66"

  },
  {
    img:bolsa,
    nome:"Grande",
    tipo:"Blossom Pouch",
    price: "$39.49",
    oPrice: "$78.66"

  },
  {
    img:bolsa,
    nome:"Grande",
    tipo:"Blossom Pouch",
    price: "$39.49",
    oPrice: "$78.66"

  },
  {
    img:bolsa,
    nome:"Grande",
    tipo:"Blossom Pouch",
    price: "$39.49",
    oPrice: "$78.66"

  },
  {
    img:bolsa,
    nome:"Grande",
    tipo:"Blossom Pouch",
    price: "$39.49",
    oPrice: "$78.66"

  },
  {
    img:bolsa,
    nome:"Grande",
    tipo:"Blossom Pouch",
    price: "$39.49",
    oPrice: "$78.66"

  },


]


  return (
    <>
      <HeaderWeb />
      <BannerPrincipal></BannerPrincipal>
      <SectionContent>
        <FilterBar>
          <Tags>
            {" "}
            <p>Size</p>
            <img src={plus} alt="plus" />
          </Tags>
          <Tags>
            {" "}
            <p>Color</p>
            <img src={minus} alt="plus" />
          </Tags>
          <ChecksBox>
            <CheckContent>
              <input type="checkbox" />
              <p>Blue</p>
            </CheckContent>
            <CheckContent>
              <input type="checkbox" />
              <p>Blue</p>
            </CheckContent>
            <CheckContent>
              <input type="checkbox" />
              <p>Blue</p>
            </CheckContent>
            <CheckContent>
              <input type="checkbox" />
              <p>Blue</p>
            </CheckContent>
            <CheckContent>
              <input type="checkbox" />
              <p>Blue</p>
            </CheckContent>
            <CheckContent>
              <input type="checkbox" />
              <p>Blue</p>
            </CheckContent>
            <CheckContent>
              <input type="checkbox" />
              <p>Blue</p>
            </CheckContent>
            <CheckContent>
              <input type="checkbox" />
              <p>Blue</p>
            </CheckContent>
            <Tags>
              {" "}
              <p>Size</p>
              <img src={plus} alt="plus" />
            </Tags>
            <Tags>
              {" "}
              <p>Size</p>
              <img src={plus} alt="plus" />
            </Tags>
            <Tags>
              {" "}
              <p>Size</p>
              <img src={plus} alt="plus" />
            </Tags>
            <Tags>
              {" "}
              <p>Size</p>
              <img src={plus} alt="plus" />
            </Tags>
          </ChecksBox>
        </FilterBar>
        <Content>
        {
          contentCard.map(cards=> <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"/HomeCategory/Label"}
            onClick={() => {
              console.log("redirecionando");
            }}
          ><CardWrapper nome={cards.nome} tipo={cards.tipo} price={cards.price} oriPrice={cards.oPrice} imgBolsa={cards.img} ></CardWrapper> </Link> )
        }
        
        </Content>
      </SectionContent>

      <FooterWeb />
    </>
  );
}