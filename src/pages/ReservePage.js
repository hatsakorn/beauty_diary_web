import React, { useEffect, useState } from 'react'
import SelectionList from '../components/SelectionList'
import * as reserveApi from '../apis/reserve-api'


function ReservePage() {
const [getCourses,setGetCourses] = useState([])

useEffect(()=>{
  const fetchCourse = async () => {
    const res = await reserveApi.getAllCourse()
    setGetCourses(res.data.courses)
  }
  fetchCourse()
},[])

const handleSubmitForm = async e => {
  e.preventDefault()
  try{
    
  }catch(err){
    console.log(err)
  }
  }
  return (
    <>
    <h1 className='text-4xl text-center'><strong>Reservation</strong></h1>
    <SelectionList getCourses={getCourses}/>
    <h1>Date</h1>
    <form onSubmit={handleSubmitForm}>
      <div>
      <input 
      className='block' 
      type="date"
      /><input 
      className='block' 
      type="time"
      />
      <button type="submit" className='bg-rose-300 rounded-lg p-2 my-3'>
        Submit
      </button>
      </div>
    </form>
    </>
  )
}

export default ReservePage