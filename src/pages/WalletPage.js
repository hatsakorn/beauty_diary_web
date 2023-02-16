import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Transaction from '../features/wallet/Transaction';
import * as transactionApi from '../apis/transaction-api'
import useAuth from '../hooks/useAuth'
// import useReserve from '../hooks/useReserve';

function WalletPage() {
  // const [getTopups,setGetTopups] = useState([])
  const [getPackage,setGetPackage] = useState([])
  const [getBalance,setGetBalance] = useState("")
  
  const navigate = useNavigate()
  const {authenticatedUser} = useAuth()
  // const {completedCourse,reserveCourse} = useReserve()

  useEffect(()=>{
    // const fetchTopup = async () => {
    //   const res = await transactionApi.getTopup()
    //   setGetTopups(res.data)
    // }
    // fetchTopup()

    const fetchPackage = async () => {
      const res = await transactionApi.getPackage()
      setGetPackage(res.data)
    }
    fetchPackage()

    const fetchBalance = async () => {
      const res = await transactionApi.getBalance()
      setGetBalance(res.data)
    }
    fetchBalance()
    
  },[])

  const handleClick = () => {
    navigate('/hReservation')
  }

  return (
    <>
    <div>
      <div className="text-5xl py-6 flex justify-center">
        {authenticatedUser.firstName} {authenticatedUser.lastName} Wallet
      </div>
      <div className="text-2xl">
        Your Balance : {getBalance} Baht
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
  )
}

export default WalletPage