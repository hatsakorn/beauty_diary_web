import React, { useState } from 'react'
import ModalShow from '../../components/Modal';


function RegisterContainer() {
    const [open,setOpen] = useState(false)

  return (
    <>
    {open && <ModalShow onClose={()=>setOpen(false)}></ModalShow>}
    </>
  )
}

export default RegisterContainer