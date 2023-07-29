import React from "react";
import Carousels from "../layouts/Carousels";

function CoursePage() {
  const pic1 = "https://picsum.photos/301";
  const pic2 = "https://picsum.photos/302";
  const pic3 = "https://picsum.photos/303";
  const pic4 = "https://picsum.photos/304";
  return (
    <>
      <div>
        <div className="bg-rose-300">
          <h1 className="m-2 text-xl text-center">
            <strong>Recommend Courses</strong>
          </h1>
        </div>
        <Carousels pic1={pic1} pic2={pic2} />
      </div>
      <h1 className="bg-rose-300 pb-5 pt-2 pl-2">
        <strong>Course Pricing</strong>
      </h1>
      <Carousels pic1={pic3} pic2={pic4} />
      <div className="bg-white m-8"></div>
      <div className="bg-white m-8"></div>
    </>
  );
}

export default CoursePage;
