import {ButtonWrapper,ButtonProps, ButtonS} from './Button';
import {Meta,StoryObj} from '@storybook/react'

export default{
  title:'Components/Button',
  component:ButtonWrapper,
  args:{
    
  },
  argTypes:{

  }
}as Meta<ButtonProps>

export const ButtonLg: StoryObj<ButtonProps> = {
  args:{
    size: "large",
    status:"focused",
    typee:"primary"
  }
}