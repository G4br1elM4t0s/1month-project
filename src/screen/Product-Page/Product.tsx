import React from "react";

import { HeaderWeb } from "../../components/Header.Web";
import { FooterWeb } from "../../components/Footer.Web";
import { ContentItemPreview, ContentItem, Navigate, ContentItemBox } from "./styleProduct";

//icons e images
import maiorQ from '../../components/img/chevron-right-small.png'

import bolsa from './product-image.png';




export function Product() {

  

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
      <ContentItem>
        <img src={bolsa} alt="bolsa" />
      </ContentItem>

      <ContentItemBox>
      <ContentItemPreview urlName={bolsa} ></ContentItemPreview>
      <ContentItemPreview urlName={bolsa} ></ContentItemPreview>
      <ContentItemPreview urlName={bolsa} ></ContentItemPreview>
      <ContentItemPreview urlName={bolsa} ></ContentItemPreview>
      </ContentItemBox>
      <FooterWeb />
    </>
  );
}
