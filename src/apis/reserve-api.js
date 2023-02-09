import axios from '../configs/axios'

export const getAllCourse = () => axios.get('/reserve/courses')
export const createCourse = input => axios.post('/reserve/course',input)
export const getAllTime = () => axios.get('/reserve/time')
export const reservation = input => axios.post('/reserve/schedule',input)