import {HeaderWeb,HeaderProps} from './Header.Web';
import {Meta,StoryObj} from '@storybook/react'

export default{
  title:'Components/Header',
  component:HeaderWeb,
  args:{
    
  },
  argTypes:{

  }
}as Meta<HeaderProps>

export const Header: StoryObj<HeaderProps> = {
  args:{
    children:'<Image source="./logo.svg"></Image>'
  }
}