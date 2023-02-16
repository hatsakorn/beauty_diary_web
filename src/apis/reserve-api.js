import axios from '../configs/axios'

export const getAllCourse = () => axios.get('/reserve/courses')
export const createCourse = input => axios.post('/reserve/course',input)
export const getAllTime = () => axios.get('/reserve/time')
export const reservation = input => axios.post('/reserve/schedule',input)
export const getReserve = () => axios.get('/reserve/schedule')
export const getCourse = () => axios.get(`/reserve/reserveCourse`)
export const getCompletedCourse = () => axios.get('/reserve/completedCourse')
export const updateStatus = (input) => axios.patch(`/reserve/update`,input)

// export const countTimeslot = (date,time) => axios.get(`/reserve/reservetime?${date}&${time}`)
// export const countTimeslot = (time,date) => axios.get('/reserve/reservetime',{params:{timeReq:time,dateReq:date}})