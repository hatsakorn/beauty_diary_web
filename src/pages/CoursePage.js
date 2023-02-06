import React from 'react'
import Carousels from '../layouts/Carousels';

function CoursePage() {
  return (
    <>
    <div>
    <div className='bg-rose-300'>
        <h1 className='m-2 text-xl text-center'><strong>Recommend Courses</strong></h1>
    </div>
    <Carousels/>
    </div>
    <h1 className='bg-rose-300 pb-5 pt-2 '>Course Pricing</h1>
    <Carousels/>
    <div className='bg-white m-8'></div>
    <div className='bg-white m-8'></div>
    </>
  )
}

export default CoursePage