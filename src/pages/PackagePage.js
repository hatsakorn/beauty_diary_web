import Carousels from '../layouts/Carousels';
import React from 'react'


function PackagePage() {
  return (
    <>
    <div>
    <div className='bg-rose-300'>
        <h1 className='p-2 text-xl text-center'><strong>Recommend Packages</strong></h1>
    </div>
    <Carousels/>
    </div>
    <h1 className='bg-rose-300 pb-5 pt-2 '>All Packages</h1>
    <Carousels/>
    <div className='bg-white m-8'></div>
    </>
  )
}

export default PackagePage