import React from 'react'
import HomeLogo from '../assets/HomeLogo.png'
import NailLogo from '../assets/NailLogo.png'
import ReservedLogo from '../assets/reservedLogo.png'
import walletLogo from '../assets/walletLogo.png'
import line from '../assets/Line.png'
import { Carousel } from 'flowbite-react';
// import Home from '../assets/index'
// import Reserve from '../assets/index'

export default function Homepage() {
  return (
  <>
  {/* Header */}
  <div className='flex justify-around bg-rose-300'>
    <div className='bg-pink-200 p-2 mt-2 w-32 mb-2 rounded-full text-center'>
    <p>LOGO</p>
    </div>
    <div>
      <div className='bg-pink-200 p-2 mt-2 rounded-lg text-center'>
        <p>Register</p>
      </div>
      <br/>
      <div className='bg-pink-200 p-2 mb-2 rounded-lg text-center'>
        <p>Log in</p>
      </div>
    </div>
    <div>
        <div>
          <div className='text-center'>
            <strong>or<br/>log in<br/>with</strong>
            <img src={line}/>
          </div>
        </div>
    </div>
  </div>

{/* Business obj */}
<div className='p-4 text-center'>
    <p className='text-lg text-rose-300'><strong>Nail salon, hand spa and eyelashes</strong></p>
</div>

{/* Container-Box */}
<div>
      <div>
        <h1>Promotion & Reviews</h1>
      </div>
      <div className="h-72 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel slide={false}>
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
      alt="1"
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
      alt="2"
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
      alt="3"
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
      alt="4"
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
      alt="5"
    />
  </Carousel>
</div>
      <div>
        <h1>Recommend Package</h1>
      </div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-3">
  <Carousel slide={false}>
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
      alt="1"
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
      alt="2"
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
      alt="3"
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
      alt="4"
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
      alt="5"
    />
  </Carousel>
</div>
</div>

    {/* <Footer/> */}
    <div className=' bg-rose-300'>
        <div className='flex justify-between pl-10 pr-10 pt-3 pb-4'>
        <div>
        <img className='w-10 h-10' src={HomeLogo}/>
        <h3>Home</h3>
        </div>
        <div>
        <img className='w-10 h-10' src={ReservedLogo}/>
        <h2>Reserve</h2>
        </div>
        <div>
        <img className='w-10 h-10' src={NailLogo}/>
        <h2>Courses</h2>
        </div>
        <div>
        <img className='w-10 h-10' src={walletLogo}/>
        <h2>Wallet</h2>
        </div>
        </div>
    </div>
    
    <div></div>
    </>
  )
}
