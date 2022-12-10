import React from "react";
import styled from "styled-components";
import { Swiper } from "swiper/react";

export interface CouponProps {
  couponName:string;
}

const Coupon = styled.div`
  width: 391px;
  height: 96px;
  border: 1px solid #1b4b66;
  border-radius: 8px;
`;

  

export const CouponWrapper: React.FC<CouponProps> = (props) => {
  return (
    <SlideBox
      navigation={true}
      slidesPerView={2}
    >
      {
        
      }
    </SlideBox>
  );
};

const SlideBox = styled(Swiper)`
  width: 46%;
`;
