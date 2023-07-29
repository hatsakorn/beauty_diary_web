import { Carousels3 } from "../layouts/Carousels";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import PackageModal from "../components/PackageModal";
import * as packageApi from "../apis/package-api";
import { Link } from "react-router-dom";
import useReserve from "../hooks/useReserve";
import course1 from "../assets/package.png";

function PackagePage() {
  const { authenticatedUser } = useAuth();
  const { setIsCourse } = useReserve();
  const [allPackage, setAllPackage] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const pic1 = course1;
  const pic2 = "https://picsum.photos/302";
  const pic3 = "https://picsum.photos/303";
  const pic4 = "https://picsum.photos/304";
  const pic5 = "https://picsum.photos/305";
  const pic6 = "https://picsum.photos/306";

  useEffect(() => {
    const fetchAllPackage = async () => {
      const res = await packageApi.getPackage();
      setAllPackage(res.data);
    };
    fetchAllPackage();
  }, []);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleClickPackage = () => {
    setIsCourse(false);
  };

  return (
    <>
      <div>
        <div className="bg-rose-300">
          <h1 className="p-2 text-xl text-center">
            <strong>Recommend Packages</strong>
          </h1>
        </div>
        <Carousels3 pic1={pic1} pic2={pic2} pic3={pic3} />
      </div>
      <div className="flex bg-rose-300 justify-evenly">
        <h1 className="bg-rose-300 pb-2 pt-2 -ml-2 ">All Packages</h1>
        {authenticatedUser &&
          (authenticatedUser.role === "admin" ? (
            <>
              <button
                className="bg-rose-300 pb-2 pt-2 ml-10 underline"
                onClick={handleOpenModal}
              >
                click to add Package
              </button>
            </>
          ) : (
            ""
          ))}

        <PackageModal
          openModal={openModal}
          onClose={() => setOpenModal(false)}
          allPackage={allPackage}
        ></PackageModal>
      </div>
      <Carousels3 pic1={pic4} pic2={pic5} pic3={pic6} />
      <div className="bg-white m-4"></div>
      {authenticatedUser && (
        <Link to="/transaction">
          <div className="flex justify-center">
            <button
              className="bg-rose-300 px-2 py-3 mb-4 text-center rounded-lg"
              onClick={handleClickPackage}
            >
              Buy Package
            </button>
          </div>
        </Link>
      )}
    </>
  );
}

export default PackagePage;
