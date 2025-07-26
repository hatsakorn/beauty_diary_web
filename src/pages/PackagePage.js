import Carousels from '../layouts/Carousels';
import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth';
import PackageModal from '../components/PackageModal';
import * as packageApi from '../apis/package-api'
import { Link } from 'react-router-dom';
import useReserve from '../hooks/useReserve';


function PackagePage() {
  const {authenticatedUser} = useAuth()
  const {setIsCourse} = useReserve()
  const [allPackage,setAllPackage] = useState([])
  const [openModal,setOpenModal] = useState(false)


  useEffect(()=>{
    const fetchAllPackage = async () => {
      const res = await packageApi.getPackage()
      setAllPackage(res.data)
    }
  fetchAllPackage()
  },[])

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleClickPackage = () => {
    setIsCourse(false)
  }

  return (
    <>
    <div>
    <div className='bg-rose-300'>
        <h1 className='p-2 text-xl text-center'><strong>Recommend Packages</strong></h1>
    </div>
    <Carousels/>
    </div>
    <div className='flex bg-rose-300 justify-evenly'>
    <h1 className='bg-rose-300 pb-2 pt-2 -ml-2 '>All Packages</h1>
    {authenticatedUser && (authenticatedUser.role === "admin" ? (
    <>
    <button 
    className='bg-rose-300 pb-2 pt-2 ml-10 underline' 
    onClick={handleOpenModal}
    >
      click to add Package
    </button>
    </>
    ):"")}

    <PackageModal 
    openModal={openModal} 
    onClose={()=>setOpenModal(false)} 
    allPackage={allPackage}
    >
    </PackageModal>
    </div>
    <Carousels/>
    <div className='bg-white m-4'></div>
    {authenticatedUser && <Link to="/transaction">
      <div className='flex justify-center'>
    <button className='bg-rose-300 px-2 py-3 mb-4 text-center rounded-lg' onClick={handleClickPackage}>Buy Package</button>
      </div>
    </Link>}
    </>
  )
}

export default PackagePage