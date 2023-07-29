import React from "react";
import { Carousel } from "flowbite-react";

function Carousels({ pic1, pic2 }) {
  return (
    <>
      <div className="bg-rose-300">
        <div className="flex justify-center rounded-2xl">
          <div className="h-72 w-80 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slide={false}>
              <img src={pic1} alt="1" />
              <img src={pic2} alt="2" />
              {/* <img src={pic3} alt="3" /> */}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

function Carousels3({ pic1, pic2, pic3 }) {
  return (
    <>
      <div className="bg-rose-300">
        <div className="flex justify-center rounded-2xl">
          <div className="h-72 w-80 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slide={false}>
              <img src={pic1} alt="1" />
              <img src={pic2} alt="2" />
              <img src={pic3} alt="3" />
              {/* <img src={pic3} alt="3" /> */}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousels;
export { Carousels3 };
