import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import styled from "styled-components";

export interface CarouselProps {}

import bolsa from "./bolsa1.png";

const PreviewImg = styled.img`
width:100px;
height:100px;
margin-right: 31px;
`

export function CarouselWrapper() {
  const handleDragStart = (e: any) => e.preventDefault();
  const items = [
    <PreviewImg src={bolsa} onDragStart={handleDragStart} role="presentation" />,
    <PreviewImg src={bolsa} onDragStart={handleDragStart} role="presentation" />,
    <PreviewImg src={bolsa} onDragStart={handleDragStart} role="presentation" />,
  ];

  const CarouselBox = styled.div`
    display: flex;
    width:350px;
    height:auto;
  `

 

  return (
    <>
      <CarouselBox>
        <AliceCarousel autoHeight paddingRight={31} mouseTracking infinite  autoWidth items={items} />
      </CarouselBox>
    </>
  );
}
