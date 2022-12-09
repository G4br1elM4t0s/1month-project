import {CardWrapper,CardProps} from './Card';
import {Meta,StoryObj} from '@storybook/react'

export default{
  title:'Components/Card',
  component:CardWrapper,
  args:{
    
  },
  argTypes:{

  }
}as Meta<CardProps>
import bolsa from './bolsa1.png'
export const Card: StoryObj<CardProps> = {
  args:{ 
    imgBolsa:bolsa,
    nome:"Grande",
    tipo:"Blossom Pouch",
    price: "$39.49",
    oriPrice: "$78.66"

  }
}

