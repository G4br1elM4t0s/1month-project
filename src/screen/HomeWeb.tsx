import React from "react";
import styled from "styled-components";

import { HeaderWeb } from "../components/Header.Web";
import GlobalStyle from "../components/styles";

const Experienci = styled.div`
  width: 100%;
  height: 50px;
  background: #f0f0f0;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Banner = styled.div`
  width: 98%;
  height: 400px;
  background: red;
  margin: 0 auto;
  margin-top: 24px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  div {
    width: 650px;
    height: 316px;
    background: gray;
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
  }
`;

const Carrosel = styled.div`
  margin-left: 19px;
  margin-top: 68px;
  h2 {
    font-weight: 600;
    font-size: 34px;
    line-height: 44px;
    font-family: "Inter";
  }
`;

const CardBox = styled.div`
  display: flex;
`;

const Card = styled.div`
  width: 286px;
  margin-right: 40px;

  img {
    width: 284px;
    height: 350px;
    border-radius: 10px;
  }
`;

const Title = styled.h4`
  font-size: 16px;
  font-weight: 500;
  font-family: "Inter";
`;

const Descript = styled.div`
  display: flex;
  img {
    width: 18px;
    height: 18px;
    margin-left: 60%;
  }
  h4 {
    font-size: 16px;
    font-weight: 500;
    font-family: "Inter";
  }
  p {
    font-size: 14px;
    font-weight: 500;
    font-family: "Inter";
    color: #626262;
  }
`;

const Collections = styled.div`
  background: #1b4b66;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 100%;
    display: flex;
    align-items: flex-start;
    h2 {
      color: #fff;
      margin: 32px 0 24px 25px;
    }
  }
`;

const CollectionsCardBox = styled.div`
  display: flex;
  width: 98%;
  align-items: center;
  justify-content: center;
`;

const ColectionsCard = styled.div`
  background-image: url(${perfume});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  margin-left: 20px;
  margin-right: 30px;
  width: 280px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: flex-end;

  h3{
    margin: 0 0 16px 16px;
  }
`;

import card from "./card.png";
import like from "../components/img/coracao.png";
import seta from "../components/img/chevron-right-small.png";
import perfume from "./perfume.png";

export function HomeWeb() {
  return (
    <>
      <HeaderWeb />
      <Experienci>
        <p>
          We are currently experiencing local customs clearance delays. For the
          latest updates, please check your order status here
        </p>
      </Experienci>

      <Banner>
        <div></div>
      </Banner>

      <Carrosel>
        <div>
          <h2>New Arrivals</h2>
          <div>
            <h4>View All</h4>
            <img src={seta} alt="seta" />
          </div>
        </div>

        <CardBox>
          <Card>
            <img src={card} alt="" />
            <Descript>
              <div>
                <h4>Grande</h4>
                <p>Blossom Pouch</p>
                <h4>$39.49</h4>
              </div>

              <img src={like} alt="curtida" />
            </Descript>
          </Card>
          <Card>
            <img src={card} alt="" />
            <Descript>
              <div>
                <h4>Grande</h4>
                <p>Blossom Pouch</p>
                <h4>$39.49</h4>
              </div>

              <img src={like} alt="curtida" />
            </Descript>
          </Card>
          <Card>
            <img src={card} alt="" />
            <Descript>
              <div>
                <h4>Grande</h4>
                <p>Blossom Pouch</p>
                <h4>$39.49</h4>
              </div>

              <img src={like} alt="curtida" />
            </Descript>
          </Card>
          <Card>
            <img src={card} alt="" />
            <Descript>
              <div>
                <h4>Grande</h4>
                <p>Blossom Pouch</p>
                <h4>$39.49</h4>
              </div>

              <img src={like} alt="curtida" />
            </Descript>
          </Card>
        </CardBox>
      </Carrosel>

      <Collections>
        <div>
          <h2>Handpicked Collections</h2>
        </div>
        <CollectionsCardBox>
          <ColectionsCard>
            <div><h3>Personal Care</h3></div>
          </ColectionsCard>
          <ColectionsCard>
            <div><h3>Personal Care</h3></div>
          </ColectionsCard>
          <ColectionsCard>
            <div><h3>Personal Care</h3></div>
          </ColectionsCard>
          <ColectionsCard>
            <div><h3>Personal Care</h3></div>
          </ColectionsCard>
        </CollectionsCardBox>
      </Collections>
    </>
  );
}
