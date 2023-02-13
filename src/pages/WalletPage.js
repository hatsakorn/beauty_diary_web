import React from 'react'
import { useNavigate } from 'react-router-dom';
import Transaction from '../features/wallet/Transaction';


function WalletPage() {
  const navigate = useNavigate()

  const handleClick = () => {
    
    navigate('/hReservation')
  }

  return (
    <>
    <div>
      <div>
        Your Wallet
      </div>
      <div>
        Your Balance : 3000 Baht
      </div>
    </div>
    <div>
      <div>
        History
      </div>
      <div>
        <Transaction/>
      </div>
    <button onClick={handleClick} >Your Reservation</button>
    </div>
    </>
  )
}

export default WalletPage