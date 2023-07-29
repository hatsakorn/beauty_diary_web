import React from "react";
import { Heart } from "../assets/icons/index";

function ThankPage() {
  return (
    <>
      <div className="bg-rose-300 text-center h-[755px]">
        <div className="flex justify-center">
          <Heart />
        </div>
        <div>
          <p className="p-5 text-white text-5xl">
            <strong> Thank You </strong>
          </p>
          <div className="p-5 text-white text-3xl">
            For Reservation
            <p className="p-5 text-white text-3xl">with Us</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThankPage;
