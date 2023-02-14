import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Transaction from '../features/wallet/Transaction';
import * as transactionApi from '../apis/transaction-api'
import useAuth from '../hooks/useAuth'

function WalletPage() {
  const [getTopup,setGetTopup] = useState([])
  const [getPackage,setGetPackage] = useState([])
  const navigate = useNavigate()

  const {authenticatedUser} = useAuth()
  useEffect(()=>{
    const userId = authenticatedUser.id
    const fetchTopup = async () => {
      const res = await transactionApi.getTopup(userId)
      setGetTopup(res.data)
    }
    fetchTopup()
    const fetchPackage = async () => {
      const res = await transactionApi.getPackage(userId)
      setGetPackage(res.data)
    }
    fetchPackage()
    
  },[])

  const handleClick = () => {
    navigate('/hReservation')
  }


  return (
    <>
    <>
    <div>
      <div className="text-5xl py-6 flex justify-center">
        {authenticatedUser.firstName} {authenticatedUser.lastName} Wallet
      </div>
      <div className="text-2xl">
        Your Balance : {getTopup} Baht
      </div>
    </div>
    <div>
      <div className=" flex justify-center text-5xl py-6">
        History
      </div>
      <div>
        <Transaction getPackage={getPackage}/>
      </div>
      <div className='flex justify-center'>
    <button onClick={handleClick} className="text-2xl bg-rose-300 py-4 px-3 my-4">Your Reservation</button>
    </div>
    </div>
    </>
    </>
  )
}

export default WalletPage