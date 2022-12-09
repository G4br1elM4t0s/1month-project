import React, { ReactNode } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


import 'swiper/css/navigation';
import 'swiper/css/thumbs';

//styles
const Sample = styled.div<CarouselProps>`
  width: 38rem;
  height: 38rem;
  border-radius: 16px;
  background-image: url(${(props) => props.imageName});
`;

const previewBox: string[] = [coach, coach, coach, coach];

interface ItemBoxProps {
  images: Array<string[] | string | any>;

}



export interface CarouselProps {
  imageName: string;
}


 


import coach from "./Coach.png";
import { Navigation, Thumbs } from "swiper";
export const CarouselWrapper:React.FC= (props) => {
  return (
    <>
      <ItemImageSlider images={previewBox}/>
    </>
  );
}

export const ItemBox:React.FC<ItemBoxProps> = (props) => {
  return (
    <>
      <Teste
        loop={true}
        spaceBetween={10}
        modules={[Navigation,Thumbs]}
        className="product-images-slider"
      >
        {
          props.images.map((item,index)=>(     //abrindocom o parenteses pq tem retorno implicito
            <SwiperSlide key={index}>
              <img src={item} alt="images" />
            </SwiperSlide>
          ))
        }
      </Teste>
      <Teste2
        loop={true}
        spaceBetween={-25}
        slidesPerView={4}
        navigation={true}
        modules={[Navigation,Thumbs]}
        grabCursor={true}
        
      >
        {
          props.images.map((item,index)=>(     //abrindocom o parenteses pq tem retorno implicito
            <SwiperSlide  key={index}>
              <div className="Item-images-slider">
                <img src={item} alt="images" />
              </div>
            </SwiperSlide>
          ))
        }
      </Teste2>
    </>
  );
}

const ItemImageSlider = styled(ItemBox)<ItemBoxProps>`
 
`


const Teste = styled(Swiper)`
  width:38rem;
  height:38rem;
  border-radius: 16px;
  

  .swiper-slide {
        padding-top: 70%;
        overflow: hidden;
        position: relative;

        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
        }
       
        
    }

  
`


const Teste2 = styled(Swiper)`
  width:29rem;
  margin-top:30px;
  
  --swiper-navigation-color: #000;
  --swiper-navigation-size: 15px;
  
.swiper-slide {
        
        margin-left:2px;
        width:5rem;
        height:5rem;
        cursor: pointer;
       

        &-thumb-active {
            border-color: #ff02f2;
        }
    }

    .Item-images-slider{
        width: 5rem;

  
        padding-top: 70%;
        
        position: relative;
        border-radius: 8px;

        img {
            position: absolute;
            top: 0;
            left: 14px;
            
            width: 100%;
            border-radius: 8px;
            margin-right:15px;
        }
    }
    .swiper-button-prev {
        left:2px;
        
      
        color: rgb(0, 0, 0);
    }

    .swiper-button-next {
        right: 2px;
       
        color: rgb(0, 0, 0);
    }
`