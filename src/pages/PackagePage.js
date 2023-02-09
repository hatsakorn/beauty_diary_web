import Carousels from '../layouts/Carousels';
import React, { useState } from 'react'
import useAuth from '../hooks/useAuth';
import PackageModal from '../components/PackageModal';


function PackagePage() {
  const {authenticatedUser} = useAuth()

  const [openModal,setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
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

    <PackageModal openModal={openModal} onClose={()=>setOpenModal(false)}></PackageModal>
    </div>
    <Carousels/>
    <div className='bg-white m-8'></div>
    </>
  )
}

export default PackagePage