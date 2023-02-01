import React from 'react'
import { Carousel } from 'flowbite-react'

function Carousels() {
  return (
    <>
      <div className='bg-rose-300'>
      <div className="flex justify-center rounded-2xl">
      <div className="h-72 w-80 sm:h-64 xl:h-80 2xl:h-96">
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
  </Carousel>
  </div>
</div>
      <div>
        <h1 className='m-2 text-xl text-center'><strong>All Packages</strong></h1>
      </div>
      <div className="flex justify-center">
      <div className="h-72 w-80 sm:h-64 xl:h-80 2xl:h-96 mb-5 mt-1">
  <Carousel slide={false}>
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
      alt="1"
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
      alt="2"
    />
  </Carousel>
</div>
</div>
</div>
</>
  )
}

export default Carousels

