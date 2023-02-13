import React, { useEffect, useState } from 'react'
import * as timeApi from '../../apis/reserve-api'
import InputTimeslot from './InputTimeslot';

function Timeslot({getTimeslot,setInputReserve,inputReserve}) {
    const [timeValue,setTimeValue] = useState([])
    const [time,setTime] = useState("")

useEffect(()=>{
    const fetchTime = async () => {
    const res = await timeApi.getAllTime()
    setTimeValue(res.data)
    }
    fetchTime()
},[])

const selectTime = (time) => {
  setInputReserve(p=> ({...p, time}))
  setTime(time)
}
  return (<>
    <div className='flex text-center flex-wrap'>
    {timeValue.map(el=>(
        <InputTimeslot 
        key={el.id} 
        timeslot={el.timeslot}
        checkLimit={el.checkLimit} 
        onClick={()=>{selectTime(el.timeslot)}} 
        time={time} 
        getTimeslot={getTimeslot}
        inputReserve={inputReserve}
        />
        ))}
    </div>
    </>
  )
}

export default Timeslot