import React, { ReactNode, FC } from "react";
import styled, { css } from "styled-components";

export interface ButtonProps{
  size?: 'large' | 'small' | 'link';
  status?: 'default' | 'disabled' | 'focused' | 'hover';
  typee?: 'outline' | 'secondary' | 'primary' | null;

}

export const ButtonS =  styled.button<ButtonProps>`
  ${(props)=>{
    if(props.size === "large"){
        return css`
          width: 328px;
          height:44px;
        `
    }

    if(props.size === "small"){
        return css`
          width: 136px;
          height:44px;
        `
    }

    if(props.size === "link"){
        return css`
          width: 136px;
          height:44px;
          background:transparent;
        `
    }

    if(props.status === "default"){
        return css`
          font-size: 14px;
        `
    }

    if(props.status === "hover"){
        return css`
          color: #639599;
          font-size: 14px;
        `
    }

    if(props.status === "focused"){
        return css`
          color: #1B4B66;
          border: 2px solid #F4F4F4;
          border-radius: 8px;
          font-size: 14px;
        `
    }
    if(props.status === "disabled"){
        return css`
          color: #B6B6B6;
          border: 2px solid #F4F4F4;
          border-radius: 8px;
          font-size: 14px;
        `
    }
    
  }}

`

import corason from "./img/coracao.png"

export const ButtonWrapper:FC<ButtonProps> = ({size, status, typee}) =>{ 
  return(
    <ButtonS size={size} status={status} typee={typee}>

    </ButtonS>
  )
}