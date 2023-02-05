import React from 'react'
import line from '../assets/Line.png'
import { Carousel } from 'flowbite-react';
import RegisterContainer from '../features/auth/RegisterContainer';
import { Link } from 'react-router-dom';


export default function Homepage() {
  return (
  <>
  {/* Header */}
<div className='m-8'>
</div>

{/* logo login register */}
  <div className='flex justify-around bg-rose-300 -m-1'>
    <div className='bg-pink-200 p-2 mt-2 w-32 mb-2 rounded-full text-center'>
    <p>LOGO</p>
    </div>
    <div>
      <div className='bg-pink-200 p-2 mt-2 rounded-lg text-center'>
        <RegisterContainer/>
      </div>
      <br/>
      <div className='bg-pink-200 p-2 mb-2 rounded-lg text-center'>
        <button>Log in</button>
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
<div className='p-1 text-center'>
    <p className='text-lg text-rose-300'><strong>Nail salon, hand spa and eyelashes</strong></p>
</div>

{/* Container-Box */}
<div className='-m-1'>
      <div>
        <h1><strong>Promotion & Reviews</strong></h1>
      </div>
      <div className="h-72 sm:h-64 xl:h-80 2xl:h-96 mt-1 mb-2">
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
      <div className='flex justify-between'>
        <h1><strong>Recommend Package</strong></h1>
        <Link to="/packages">
        <h1 className='underline'>More packages</h1>
        </Link>
      </div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-5 mt-1">
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
    <div></div>
    </>
  )
}
