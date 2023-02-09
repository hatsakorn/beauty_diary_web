import React from 'react'

function InputTimeslot({timeslot,time,onClick,getTimeslot,setInputReserve,inputReserve}) {

    getTimeslot(time)
  
  return (
    <>
    <div className='w-1/4'>
            <input type='button' value={timeslot} onClick={onClick} className={`${time === timeslot ? 'bg-rose-500':'bg-rose-200'} rounded-lg px-6 py-3 my-3`}/>
    </div>
    </>
  )
}

export default InputTimeslot