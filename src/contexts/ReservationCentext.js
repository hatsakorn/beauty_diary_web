import { createContext, useEffect, useState } from "react";
import * as reserveApi from '../apis/reserve-api'
import useAuth from "../hooks/useAuth";

export const ReserveContext = createContext()


function ReservationCentext({children}) {
    const [reserveCourse,setReserveCourse] = useState([])
    const [isCourse,setIsCourse] = useState(false)


    const {authenticatedUser} = useAuth()

    useEffect(()=>{
        
        const fetchCourse = async () => {
            const res = await reserveApi.getCourse()
            setReserveCourse(res.data)
            console.log(res.data)
        }
        fetchCourse()
    },[])


  return (
    <ReserveContext.Provider value={{reserveCourse,setIsCourse,isCourse}}>{children}</ReserveContext.Provider>
  )
}

export default ReservationCentext