import React from 'react'
// import { Carousel } from 'flowbite-react';
import RegisterContainer from '../features/auth/RegisterContainer';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth'
import Carousels from '../layouts/Carousels'

export default function Homepage() {
  const {logout,authenticatedUser} = useAuth()
  return (
  <>
{/* logo login register */}
  <div className='flex justify-around bg-rose-300 -m-1'>
    <div className='bg-pink-200 p-2 mt-2 w-32 mb-2 rounded-full text-center'>
    <p>LOGO</p>
    </div>
    {authenticatedUser ?(
    <div className='bg-pink-200 p-2 mb-2 rounded-lg text-center'>
      <button onClick={logout}>Logout</button>
    </div>
    ):(
    <div>
      <div className='bg-pink-200 p-2 mt-2 rounded-lg text-center'>
        <RegisterContainer/>
      </div>
      <br/>
      <div className='bg-pink-200 p-2 mb-2 rounded-lg text-center'>
        <Link to="/login">
        <button>Log in</button>
        </Link>
      </div>
    </div>)}
          {/* <div className='text-center'>
            <strong>or<br/>log in<br/>with</strong>
            <img src={line}/>
          </div>  */}
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
  <Carousels slide={false}/>
      <div className='flex justify-between'>
        <h1><strong>Recommend Package</strong></h1>
        <Link to="/packages">
        <h1 className='underline'>More packages</h1>
        </Link>
      </div>
  <Carousels slide={false} />
</div>
    <div></div>
    </>
  )
}
