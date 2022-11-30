import styled from "styled-components";


export const Navigate = styled.div`
  display: flex; 
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

interface ItemPros{
  urlName:string;
}

export const ContentItemPreview = styled.div<ItemPros>`
  width: 100px;
  height: 100px;
  margin-right:31px;
  background-image: url(${(props)=> props.urlName});
  background-size: contain;
  background-repeat: no-repeat;
`