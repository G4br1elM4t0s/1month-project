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