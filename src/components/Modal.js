import React, { Children, useEffect, useState } from 'react'
import { Button, Modal, TextInput } from 'flowbite-react'
import * as authApi from '../apis/auth-api'
const initialInput = {
    "email":"",
    "password":"",
    "confirmPassword":"",
    "firstName":"",
    "lastName":"",
    "mobile":"",
    "dob":"",
    "balance":0,
    "role":"customer"
}

function ModalShow({isVisible,onClose}) {
//   useEffect(()=>{  
//     document.addEventListener('keydown',(event) => {
//     if (event.key === "Escape"){
//       onClose();
//     }
// })},[isVisible])

const [input,setInput] = useState(initialInput)
// console.log(input)
const handleChangeInput = (e) => {
  // console.log(e.target.name)
  setInput({...input,[e.target.name]:e.target.value})
}

  const handleSubmitForm = async(e) => {
    try{
       e.preventDefault()
        // console.log(input)
      await authApi.register(input)
      setInput(initialInput)
      onClose()
    }catch(err){
      console.log(err)
    }
  }

  return (
    <>
  <Modal
    show = {isVisible}
    size="md"
    popup={true}
    onClose={onClose}
  >
    <Modal.Header />
    <Modal.Body >
      <form onSubmit={handleSubmitForm}>
      <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">
          Register
        </h3>
        <div>
          <div className="mb-2 block">
          </div>
          <TextInput
            id="email"
            placeholder="Your email"
            name="email"
            value={input.email}
            required={true}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <div className="mb-2 block">
          </div>
          <TextInput
            id="password"
            type="password"
            placeholder="Your password"
            name="password"
            value={input.password}
            required={true}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <div className="mb-2 block">
          </div>
          <TextInput
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            name="confirmPassword"
            value={input.confirmPassword}
            required={true}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <div className="mb-2 block">
          </div>
          <TextInput
            id="firstName"
            type="text"
            placeholder="Your first name"
            name="firstName"
            value={input.firstName}
            required={true}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <div className="mb-2 block">
          </div>
          <TextInput
            id="lastName"
            type="text"
            placeholder="Your last name"
            name="lastName"
            value={input.lastName}
            required={true}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <div className="mb-2 block">
          </div>
          <TextInput
            id="mobile"
            type="text"
            placeholder="Your phone number"
            name="mobile"
            value={input.mobile}
            required={true}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <div className="mb-2 block">
          </div>
          <TextInput
            id="dob"
            type="date"
            placeholder="Your birth date"
            name="dob"
            value={input.dob}
            onChange={handleChangeInput}
          />
        </div>
        <div className="flex justify-center">
             <Button type='submit'>
             Create account
             </Button>
        </div>
      </div>
      </form>
    </Modal.Body>
  </Modal>
    </>
  )
}

export default ModalShow