import {CouponProps,CouponWrapper} from './Coupon';
import {Meta,StoryObj} from '@storybook/react'

export default{
  title:'Components/Coupon',
  component:CouponWrapper,
  args:{
    
  },
  argTypes:{

  }
}as Meta<CouponProps>

export const Coupon: StoryObj<CouponProps> = {
  args:{ }
}

