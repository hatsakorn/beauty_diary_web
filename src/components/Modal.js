import React from 'react'
import { Button, Modal, TextInput } from 'flowbite-react'


function ModalShow({onClose}) {
  return (
    <>
  <Modal
    show={true}
    size="md"
    popup={true}
    // onClose={onClose}
  >
    <Modal.Header />
    <Modal.Body>
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
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
          </div>
          <TextInput
            id="password"
            type="password"
            placeholder="Your password"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
          </div>
          <TextInput
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
          </div>
          <TextInput
            id="firstName"
            type="text"
            placeholder="Your first name"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
          </div>
          <TextInput
            id="lastName"
            type="text"
            placeholder="Your last name"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
          </div>
          <TextInput
            id="phoneNumber"
            type="text"
            placeholder="Your phone number"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
          </div>
          <TextInput
            id="birthDate"
            type="date"
            placeholder="Your birth date"
            required={true}
          />
        </div>
        <div className="flex justify-center">
             <Button>
             Create account
             </Button>
        </div>
      </div>
    </Modal.Body>
  </Modal>
    </>
  )
}

export default ModalShow