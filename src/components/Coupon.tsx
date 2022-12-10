import React, { ReactNode } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/thumbs";

export interface CouponProps {
  couponName: Array<string[] | string>;
}

const Coupon = styled.div`
  width: 391px;
  height: 96px;
  border: 1px solid #1b4b66;
  border-radius: 8px;
  display: flex;
  
  h4 {
    margin: 0;
    font-size:16px;
  }

  p {
    margin: 0;
    font-size:14px;
  }

  .off{
    margin: 16px 0 16px 16px;
    width:229px;
  }

  .use-coupon-box {
    width: 109px;
    height: 66px;
    margin: 15px 16px 15px 21px;
    /* Grey */
    background: #f1f1f1;
    border-radius: 4px;
  }
`;

const Coupons = ["ORDER100", "ORDER100", "ORDER100"];

export const CouponWrapper: React.FC = (props) => {
  return <CouponFrame couponName={Coupons} />;
};

const Teste2 = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const CouponBox: React.FC<CouponProps> = (props) => {
  return (
    <Teste2>
      <SlideBox
        spaceBetween={-450} //sever para juntar ou afasta os itens
        slidesPerView={2}
        grabCursor={true}
      >
        {props.couponName.map((item, index) => (
          <SwiperSlide>
            <Coupon>
              <div className="off">
                <h4>Get upto 30% Off on order</h4>
                <h4>value above $100</h4>
                <p>Terms & Conditions</p>
              </div>
              <div className="use-coupon-box">
                <div className="use-coupon">
                  <p>Use Code</p>
                  <h4>{item}</h4>
                </div>
              </div>
            </Coupon>
          </SwiperSlide>
        ))}
      </SlideBox>
    </Teste2>
  );
};

const CouponFrame = styled(CouponBox)<CouponProps>``;

const SlideBox = styled(Swiper)`
  width: 100vw;

  .swiper-slider {
    display: flex;
    overflow: hidden;
    position: relative;
  }
`;
