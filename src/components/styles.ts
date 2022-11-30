// import React, { ReactNode } from "react";
// import styled from "styled-components";



// import { HeaderProps } from "./Header.Web";

// export const Header = styled.header<HeaderProps>`
//   width:100%;
//   height:50px;
//   background:black;

//   ${props => {
//     if(props.teste === 'teste'){
//       return(
//         css`
//           background:white;
//         `
//       )
//     }
//   }}

// `
// interface LogoPrpos{
//   source:string;
// }

// export const Logo =  styled.image`
//   source:'./logo.svg'
//   width: 100px;
//   height: 100px;
// `


import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  
`

export default globalStyle;