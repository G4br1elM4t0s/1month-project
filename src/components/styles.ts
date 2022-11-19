
import styled,{css} from "styled-components";

import { HeaderProps } from "./Header.Web";

export const Header = styled.header<HeaderProps>`
  width:100%;
  height:50px;
  background:black;

  ${props => {
    if(props.teste === 'teste'){
      return(
        css`
          background:white;
        `
      )
    }
  }}

`
interface LogoPrpos{
  source:string;
}

export const Logo =  styled.image`
  source:'./logo.svg'
  width: 100px;
  height: 100px;
`
