import styled from "styled-components";


export const Navigate = styled.div`
  display: flex; 
  margin-left:22px;
  margin-bottom:19px;
`

export const ContentItem = styled.div`
  display: flex;

  img{
    width:605px;
    height:605px;
  }
  
`

export const ContentItemBox = styled.div`
  display:flex;
  
`

interface ItemPros {
  urlName: string;
}

export const ContentItemPreview = styled.div<ItemPros>`
  width: 100px;
  height: 100px;
  margin-right:31px;
  background-image: url(${(props) => props.urlName});
  background-size: contain;
  background-repeat: no-repeat;
`

export const OuContent = styled.div`
  display: flex;
  width: 100%;
`
export const LeftContent = styled.div`
  margin-left:22px;
  width: 47%;
`

export const RightContent = styled.div`
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left:27px;
  width: 47%;
`

export const PrimaryBoxRightContent = styled.div`
  border-bottom: 1px solid black;
  width: 100%;
`

export const BoxStart = styled.div`
display: flex;
align-items:center;
 p{
  margin-left:16px;
  color:#B6B6B6;
 }
`



export const TitleAndDescription = styled.div`
  
`
export const PriceBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom:24px;
`


export const DeliveryContent = styled.div`
  h4{
    font-size:20px;
  }
  p{
    font-size:16px;
    color:#626262;
  }
`

export const Discount = styled.div`
  width: 390px;
  height: 52px;
  background:#F1F1F1;
  border-radius:5px;
  input{
    background: transparent;
    color:#626262;
    width: 80%;
    height: 100%;
    border:none;
    font-size:16px;
    border-radius:5px;
  }
  a{
    text-decoration: none;
    color:#1B4B66;
    margin-left:12px;
  }
`

export const SecundaryBoxRight = styled.div`
  display:flex;
  margin-top:24px;
`

export const Amount = styled.div`
  display:flex;
  margin-top:42px;
  align-items:center;
    h3{
      font-size:20px;
    }

    .counter{
      margin-left:16px;
      border: 1px solid #1B4B66;
      display:flex;
      width: 73px;
      height:30px;
      border-radius:3px;
      align-items:center;
      justify-content:center;

    
      span{
        margin-right:7px;
        margin-left:7px;
      }
      .control__btn_plus{
        width: 18px;
        height: 18px;
      }

      .control__btn_minus{
        width: 18px;
        height: 18px;
      }
    }
  
`