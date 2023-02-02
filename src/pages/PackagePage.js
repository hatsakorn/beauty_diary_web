import Carousels from '../layouts/Carousels';
import React from 'react'
import Footer from '../layouts/Footer';

function PackagePage() {
  return (
    <>
    <div className='m-8'>
    </div>
    <div>
    <div className='bg-rose-300'>
        <h1 className='m-2 text-xl text-center'><strong>Recommend Packages</strong></h1>
    </div>
    <Carousels/>
    </div>
    <div className='bg-white m-8'></div>
    </>
  )
}

export default PackagePage