import React, { useEffect, useState } from 'react'
import SelectionList from '../features/reserve/SelectionList'
import * as reserveApi from '../apis/reserve-api'
import * as timeApi from '../apis/reserve-api'
import Timeslot from '../features/reserve/Timeslot';
import { useNavigate, useSearchParams } from 'react-router-dom';

const initialInput = {
  "title":"",
  "status":"pending",
  "date":"",
  "time":""
}

function ReservePage() {
const [getCourses,setGetCourses] = useState([])
const [inputReserve,setInputReserve] = useState(initialInput)

const navigate = useNavigate()

useEffect(()=>{
  const fetchCourse = async () => {
    const res = await reserveApi.getAllCourse()
    // console.log(res.data)
    setGetCourses(res.data)
  }
  fetchCourse()

},[])


const getTimeslot = (timeslot) => {
      return timeslot
    }
    const handleOnChange = async (e) => {
      setInputReserve({...inputReserve,[e.target.name]:e.target.value})
    }
    
const handleSubmitForm = async e => {
  e.preventDefault()
  try{
    await reserveApi.reservation(inputReserve)
    setInputReserve(initialInput)
    navigate('/thank')
  }catch(err){
    console.log(err)
  }
  }

  return (
    <>
    <h1 className='text-4xl text-center'><strong>Reservation</strong></h1>
    <form onSubmit={handleSubmitForm}>
    <SelectionList getCourses={getCourses} setGetCourses={setGetCourses} setInputReserve={setInputReserve} inputReserve={inputReserve}/>
    <div className='flex w-5/6 my-2'>
    <h1>Date</h1>
      </div>
      <input 
      className='block my-2' 
      type="date"
      name="date"
      value={inputReserve.date}
      onChange={handleOnChange}
      />
      <h1>Select Your Desired Time</h1>
      <Timeslot getTimeslot={getTimeslot} setInputReserve={setInputReserve} inputReserve={inputReserve}/>
      <button type="submit" className='bg-rose-300 rounded-lg p-2 my-3'>
        Submit
      </button>
    </form>
    </>
  )
}

export default ReservePage