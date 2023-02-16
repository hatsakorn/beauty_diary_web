import React, { useEffect, useState } from 'react'
import SelectionList from '../features/reserve/SelectionList'
import * as reserveApi from '../apis/reserve-api'
// import * as timeApi from '../apis/reserve-api'
import Timeslot from '../features/reserve/Timeslot';
import { useNavigate} from 'react-router-dom';
import useReserve from '../hooks/useReserve'
import useAuth from '../hooks/useAuth';


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

const {setIsCourse,fetchCourse} = useReserve()

const {authenticatedUser} = useAuth()

const fetchCourses = async () => {
  const res = await reserveApi.getAllCourse()
  // console.log(res.data)
  setGetCourses(res.data)
}
useEffect(()=>{
  fetchCourses()

},[])

const userId = authenticatedUser?.id

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
    fetchCourse(userId)
    setInputReserve(initialInput)
    setIsCourse(true)
    navigate('/transaction')
  }catch(err){
    console.log(err)
  }
  }

  return (
    <>
    <h1 className='text-4xl text-center'><strong>Reservation</strong></h1>
    <SelectionList getCourses={getCourses} setGetCourses={setGetCourses} setInputReserve={setInputReserve} inputReserve={inputReserve} fetchCourses={fetchCourses}/>
    <form onSubmit={handleSubmitForm}>
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