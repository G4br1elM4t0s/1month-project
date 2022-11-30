import {FooterWeb,FooterProps} from './Footer.Web';
import {Meta,StoryObj} from '@storybook/react'

export default{
  title:'Components/Footer',
  component:FooterWeb,
  args:{
    
  },
  argTypes:{

  }
}as Meta<FooterProps>

export const Footer: StoryObj<FooterProps> = {
  args:{ }
}


  /* ${(props) =>
    props.variant==="secondary" &&
    css`
      background-color: ${(props) => props.theme.colors.grey[0]};
      color:${(props) => props.theme.colors.grey[9]};
      &:hover {
        color:  ${(props) => props.theme.colors.grey[0]};
      }
    `};
  ${(props) =>
    props.variant==="disabled" &&
    css`
      background-color: ${(props) => props.theme.colors.grey[4]};
      color: ${(props) => props.theme.colors.grey[9]};
      border: 2px solid ${(props) => props.theme.colors.grey[4]};
      cursor: not-allowed;
      &:hover {
        background-color: ${(props) => props.theme.colors.grey[5]};
        color: ${(props) => props.theme.colors.grey[0]};
      }
    `}; */