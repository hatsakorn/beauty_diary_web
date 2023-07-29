import React from "react";
// import { Carousel } from 'flowbite-react';
import RegisterContainer from "../features/auth/RegisterContainer";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Carousels from "../layouts/Carousels";
import course1 from "../assets/package.png";
import promotion1 from "../assets/promotion.png";
import pricing1 from "../assets/pricing1.png";
import pricing2 from "../assets/pricing2.png";

export default function Homepage() {
  const { logout, authenticatedUser } = useAuth();
  const pic1 = course1;
  const pic2 = promotion1;
  const pic4 = pricing1;
  const pic5 = pricing2;

  return (
    <>
      {/* logo login register */}
      <div className="flex justify-around bg-rose-300 ">
        {authenticatedUser ? (
          <>
            <div className="bg-pink-200 h-[112px] p-2 mt-2 w-32 mb-2 rounded-full">
              <div className="flex justify-center mt-[25%]">
                <strong>Beauty Diary</strong>
              </div>
            </div>
            <div className="bg-pink-200 h-[40px] p-2 mt-2 rounded-lg">
              <button onClick={logout}>Logout</button>
            </div>
          </>
        ) : (
          <>
            <div className="bg-pink-200 h-[112px] p-2 mt-2 w-32 mb-2 rounded-full">
              <div className="flex justify-center mt-[25%]">
                <strong>Beauty Diary</strong>
              </div>
            </div>
            <div>
              <div className="bg-pink-200 p-2 mt-2 rounded-lg text-center">
                <RegisterContainer />
              </div>
              <br />
              <div className="bg-pink-200 p-2 mb-2 mt-2 rounded-lg text-center">
                <Link to="/login">
                  <button>Log in</button>
                </Link>
              </div>
            </div>
          </>
        )}
        {/* <div className='text-center'>
            <strong>or<br/>log in<br/>with</strong>
            <img src={line}/>
          </div>  */}
      </div>

      {/* Business obj */}
      <div className="p-1 text-center">
        <p className="text-lg text-rose-300">
          <strong>Nail salon, hand spa and eyelashes</strong>
        </p>
      </div>

      {/* Container-Box */}
      <div className="-m-1">
        <div>
          <h1 className="ml-2">
            <strong>Promotion & Reviews</strong>
          </h1>
        </div>
        <Carousels slide={false} pic1={pic1} pic2={pic2} />
        <div className="flex justify-between">
          <h1 className="ml-2">
            <strong>Recommend Package</strong>
          </h1>
          <Link to="/packages">
            <h1 className="underline mr-4">More packages</h1>
          </Link>
        </div>
        <Carousels slide={false} pic1={pic4} pic2={pic5} />
      </div>
      <div></div>
    </>
  );
}
