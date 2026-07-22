import React from 'react'
import Stripe from './Stripe' 

const data = [
  {
    url: "/src/assets/images/stripe1.png",
    number: 2
  },
  {
    url: "/src/assets/images/stripe2.png",
    number: 2
  },
  {
    url: "/src/assets/images/stripe3.png",
    number: 2
  },
  {
    url: "/src/assets/images/stripe4.png",
    number: 2
  },
  {
    url: "/src/assets/images/stripe5.png",
    number: 2
  },
  {
    url: "/src/assets/images/stripe6.png",
    number: 2
  },
]

const Stripes = () => {
  return (
    <div className='flex justify-center items-center'>
      {data.map((elem, idx)=>{
        return <Stripe key={idx} val={elem} /> 
      })}
    </div>
  )
}

export default Stripes