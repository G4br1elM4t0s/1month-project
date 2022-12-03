import {CarouselWrapper,CarouselProps} from './carousel/Carousel';
import {Meta,StoryObj} from '@storybook/react'

export default{
  title:'Components/Carousel',
  component:CarouselWrapper,
  args:{
    
  },
  argTypes:{

  }
}as Meta<CarouselProps>

export const Carousel: StoryObj<CarouselProps> = {
  args:{ }
}