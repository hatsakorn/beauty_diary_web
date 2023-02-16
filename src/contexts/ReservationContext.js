import { createContext, useEffect, useState } from "react";
import * as reserveApi from '../apis/reserve-api'
import * as transactionApi from '../apis/transaction-api'

export const ReserveContext = createContext()


function ReservationCentext({children}) {
    const [reserveCourse,setReserveCourse] = useState([])
    const [isCourse,setIsCourse] = useState(false)
    const [completedCourse,setCompletedCourse] = useState([])

    
 

    const fetchCourse = async () => {
      const res = await transactionApi.getAllCourses()
      setReserveCourse(res.data)
    }
    const fetchCompletedCourse = async () => {
      const res = await reserveApi.getCompletedCourse()
      setCompletedCourse(res.data)
    }
    
    useEffect(()=>{
    
        fetchCourse()
        fetchCompletedCourse()
      
    },[])

 
 

  return (
    <ReserveContext.Provider 
    value={{
      reserveCourse,
      setIsCourse,
      isCourse,
      fetchCourse,
      completedCourse,
      setReserveCourse
    }}
    >{children}
    </ReserveContext.Provider>
  )
}

export default ReservationCentext