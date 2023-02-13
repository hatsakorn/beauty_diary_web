import React, { useState,useEffect} from 'react'
import * as reserveApi from '../../apis/reserve-api'

function InputTimeslot({timeslot,time,onClick,getTimeslot,inputReserve,checkLimit}) {
// const [isReserve,setIsReserve] = useState(false)
// const [getTime,setGetTime] = useState({})
// const [getSchedule,setGetSchedule] = useState({})
const [countTime,setCountTime] = useState("")

// useEffect(()=>{
//   const {time,date} = inputReserve
//   const avaiTimeslot = async () => {
//     console.log(time)
//   const res = await reserveApi.countTimeslot(time,date)
//   setCountTime(res.data)
//   console.log(countTime)
//   console.log(checkLimit)
  
  
// }
// avaiTimeslot()
// },[inputReserve])
  
  getTimeslot(time)
  
  return (
    <>
    {countTime<=checkLimit?<><div className='w-1/4'>
            <input 
            type='button' 
            value={timeslot} 
            onClick={onClick} 
            className={`${time === timeslot ? 'bg-rose-500':'bg-rose-200'} rounded-lg px-6 py-3 my-3`}/>
    </div></>:""}
    </>
  )
}

export default InputTimeslot