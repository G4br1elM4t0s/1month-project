import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  width: 286px;
  margin-bottom: 64px;
`;
const Description = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h4{
      margin: 0;
    }
    img {
      width: 18px;
      height: 17px;
    }
    margin-bottom:8px;
  }

  p {
    margin: 0;
    margin-bottom:8px;
  }
`;

const Avaliacao = styled.div`
  display: flex;
`;

const Estrela = styled.div`
  display: flex;
  margin-bottom:11px;
`;

const Price = styled.div`
  display: flex;
  h5{
    margin: 0;
  }
`;

import bolsa from "./bolsa1.png";
import like from "./img/coracao.png";
import estrela from "./icon/Vector-1.png";
import estrela2 from "./icon/Vector-1.png";

export interface CardProps {
  imgBolsa: string ;
  nome: string;
  tipo: string;
  price: string;
  oriPrice: string;
}

export function CardWrapper({
  nome,
  oriPrice,
  price,
  tipo,
  imgBolsa,
}: CardProps) {
  return (
    <Card>
      <img src={imgBolsa} alt="bolsa" />
      <Description>
        <div>
          <h4>{nome}</h4>
          <img src={like} alt="like" />
        </div>
        <p>{tipo}</p>
        <Avaliacao>
          <Estrela>
            <img src={estrela} alt="" />
            <img src={estrela} alt="" />
            <img src={estrela} alt="" />
            <img src={estrela} alt="" />
            <img src={estrela2} alt="" />
          </Estrela>
          <p>43 Ratings</p>
        </Avaliacao>
        <Price>
          <h4>{price}</h4>
          <s>{oriPrice}</s>
          <h5>50% OFF</h5>
        </Price>
      </Description>
    </Card>
  );
}
