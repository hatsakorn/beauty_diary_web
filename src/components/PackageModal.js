import React, { useState } from 'react'
import { Button, Modal, TextInput } from 'flowbite-react'
import * as packageApi from '../apis/package-api'

const initialInput = {
    "title":"",
    "price":"",
    "topup":"",
    "packageImage":"",
    "adsImage":""
}

function PackageModal({openModal,onClose}) {

const [input,setInput] = useState(initialInput)
const handleChangeInput = (e) => {
  // console.log(e.target.name)
  setInput({...input,[e.target.name]:e.target.value})
}

  const handleSubmitForm = async(e) => {
    try{
       e.preventDefault()
        // console.log(input)
      await packageApi.createPackage(input)
      setInput(initialInput)
      onClose()
    }catch(err){
      console.log(err)
    }
  }

  return (
    <>
  <Modal
    show = {openModal}
    size="md"
    popup={true}
    onClose={onClose}
  >
    <Modal.Header />
    <Modal.Body >
      <form onSubmit={handleSubmitForm}>
      <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">
          Add Package
        </h3>
        <div>
          <div className="mb-2 block">
          </div>
          <TextInput
            id="title"
            placeholder="Package Name"
            name="title"
            value={input.title}
            required={true}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <div className="mb-2 block">
          </div>
          <TextInput
            id="price"
            placeholder="package price"
            name="price"
            value={input.price}
            required={true}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <div className="mb-2 block">
          </div>
          <TextInput
            id="topup"
            placeholder="topup price"
            name="topup"
            value={input.topup}
            required={true}
            onChange={handleChangeInput}
          />
        </div>
        
        <div>
          <div className="mb-2 block">
          </div>
          <TextInput
            id="packageImage"
            type="file"
            name="packageImage"
            value={input.packageImage}
            onChange={handleChangeInput}
          />
        </div>
        <label>Package Image</label>
        <div>
          <div className="mb-2 block">
          </div>
          <TextInput
            id="adsImage"
            type="file"
            name="adsImage"
            value={input.adsImage}
            onChange={handleChangeInput}
          />
        </div>
        <label>advertisement Image</label>
        <div className="flex justify-center">
             <Button type='submit'>
             Add
             </Button>
        </div>
      </div>
      </form>
    </Modal.Body>
  </Modal>
    </>
  )
}

export default PackageModal