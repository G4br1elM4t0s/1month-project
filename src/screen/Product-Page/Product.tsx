import React, { useState } from "react";

import { HeaderWeb } from "../../components/Header.Web";
import { FooterWeb } from "../../components/Footer.Web";
import {
  ContentItemPreview,
  ContentItem,
  Navigate,
  ContentItemBox,
  OuContent,
  LeftContent,
  RightContent,
  TitleAndDescription,
  PriceBox,
  BoxStart,
  PrimaryBoxRightContent,
  DeliveryContent,
  Discount,
  SecundaryBoxRight,
  Amount,
} from "./styleProduct";

//icons e images
import maiorQ from "../../components/img/chevron-right-small.png";
import bolsa from "./product-image.png";
import { CarouselWrapper } from "../../components/Carousel";
import estrela from "../Category/icon/Vector-1.png";
import estrela2 from "../Category/icon/Vector-2.png";

import plus from '../../components/img/plus.png';
import menus from '../../components/img/small-minus.png'

export function Product() {
  const [counter, setCounter] = useState(0);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter((count) => count - 1);
  };

  return (
    <>
      <HeaderWeb />
      <Navigate>
        <p>Home</p>
        <img src={maiorQ} alt="maiorQ" />
        <p>Hangbag</p>
        <img src={maiorQ} alt="maiorQ" />
        <p>Label</p>
      </Navigate>
      <OuContent>
        <LeftContent>
          <CarouselWrapper />
        </LeftContent>
        <RightContent>
          <TitleAndDescription>
            <h1>Coach</h1>
            <p>Leather Coach Bag with adjustable starps.</p>
          </TitleAndDescription>
          <PrimaryBoxRightContent>
            <BoxStart>
              <img src={estrela} alt="" />
              <img src={estrela} alt="" />
              <img src={estrela} alt="" />
              <img src={estrela} alt="" />
              <img src={estrela2} alt="" />
              <p>(250) Ratings</p>
            </BoxStart>
            <PriceBox>
              <h1>$54.69</h1>
              <s>$78.66</s>
              <p>50%OFF</p>
            </PriceBox>
          </PrimaryBoxRightContent>
          <SecundaryBoxRight>
            <DeliveryContent>
              <h4>Delivery Details</h4>
              <p>Check estimated delivery </p>
              <p>date/pickup option.</p>
            </DeliveryContent>

            <Discount>
              <input type="text" />
              <a href="">CHECK</a>
            </Discount>
          </SecundaryBoxRight>

          <Amount>
            <h3>Quantity:</h3>
            <div className="counter">
              <img src={menus} className="control__btn_plus" onClick={decrease}/>
              
              <span className="counter__output">{counter}</span>
              <img src={plus} className="control__btn_minus" onClick={increase}/>
              
            </div>
          </Amount>
        </RightContent>
      </OuContent>
      <FooterWeb />
    </>
  );
}
