import axios from '../configs/axios'

export const getAllCourse = () => axios.get('/reserve/courses')
export const createCourse = input => axios.post('/reserve/course',input)