import styled from "styled-components";

export const Navigate = styled.div`
  display: flex;
  margin-left: 22px;
  margin-bottom: 19px;
`;

export const ContentItem = styled.div`
  display: flex;

  img {
    width: 605px;
    height: 605px;
  }
`;

export const ContentItemBox = styled.div`
  display: flex;
`;

interface ItemPros {
  urlName: string;
}

export const ContentItemPreview = styled.div<ItemPros>`
  width: 100px;
  height: 100px;
  margin-right: 31px;
  background-image: url(${(props) => props.urlName});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const OuContent = styled.div`
  display: flex;
  width: 100%;
`;
export const LeftContent = styled.div`
  margin-left: 22px;
  width: 47%;
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 27px;
  width: 47%;
`;

export const PrimaryBoxRightContent = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  width: 100%;
`;

export const BoxStart = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 27px;
  p {
    margin-left: 16px;
    color: #b6b6b6;
  }
`;

export const TitleAndDescription = styled.div`
  margin-bottom: 32px;
`;
export const PriceBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const DeliveryContent = styled.div`
  h4 {
    font-size: 20px;
  }
  p {
    font-size: 16px;
    color: #626262;
  }
`;

export const Discount = styled.div`
  width: 390px;
  height: 52px;
  background: #f1f1f1;
  border-radius: 5px;
  margin-left: 50px;
  input {
    background: transparent;
    color: #626262;
    width: 80%;
    height: 100%;
    border: none;
    font-size: 16px;
    border-radius: 5px;
  }
  a {
    text-decoration: none;
    color: #1b4b66;
    margin-left: 12px;
  }
`;

export const SecundaryBoxRight = styled.div`
  display: flex;
  margin-top: 24px;
`;

export const Amount = styled.div`
  display: flex;
  margin-top: 42px;
  align-items: center;
  margin-bottom: 52px;
  h3 {
    font-size: 20px;
  }

  .counter {
    margin-left: 16px;
    border: 1px solid #1b4b66;
    display: flex;
    width: 73px;
    height: 30px;
    border-radius: 3px;
    align-items: center;
    justify-content: center;

    span {
      margin-right: 7px;
      margin-left: 7px;
    }
    .control__btn_plus {
      width: 18px;
      height: 18px;
    }

    .control__btn_minus {
      width: 18px;
      height: 18px;
    }
  }
`;

export const TabBar = styled.div`
  width: 98%;
  height: 48px;
  background: #f1f1f1;
  display: flex;
  margin: 0 auto;
  border-radius: 12px;
  align-items: center;

  margin-top:63px;


  .active-tabs {
    & {
      content: "";
      display: block;
      height: 32px;
      color:white;
      background: rgb(88, 147, 241);
    }
  }

  .active-tabs {
    border-bottom: 1px solid transparent;
    border-radius: 8px;
    width: 189px;
  }
`;

export const ButtonOne = styled.button`
  border: none;
  margin-left:16px;
  cursor: pointer;
  margin-right: 24px;
  color:#626262;
  font-size: 16px;
`;

export const ButtonTwo = styled.button`
  border: none;
  cursor: pointer;
  margin-right: 24px;
  color:#626262;
  font-size: 16px;
`;

export const ButtonThree = styled.button`
  border: none;
  cursor: pointer;
  margin-right: 24px;
  color:#626262;
  font-size: 16px;
`;


export const TextContent = styled.div`
  width: 80%;
  height: 160px;
  margin-left:1%;
  margin-top:24px;
  margin-bottom:161px;

  .content-tabs {
  flex-grow : 1;
}
.content {
  background: white;
  padding: 20px;
  width: 100%;
  height: 100%;
  display: none;
}
.active-content {
  display: block;
}

`
