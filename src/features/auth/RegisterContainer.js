import React, { useState } from 'react'
import ModalShow from '../../components/Modal';


function RegisterContainer() {
    const [isVisible,setIsvisible] = useState(false)

    const handleModalOpen = () => {
      setIsvisible(true)
    }
  return (
    <>
    <button onClick={handleModalOpen}>Register</button>
    <ModalShow isVisible={isVisible} onClose={()=>setIsvisible(false)}></ModalShow>
    </>
  )
}

export default RegisterContainer