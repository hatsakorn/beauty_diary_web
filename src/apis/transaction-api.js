import axios from '../configs/axios'

export const getAllCourses = () => axios.get(`/transaction/gets`)
export const getAllCourse = () => axios.get(`/transaction/get`)
export const getTopup = () => axios.get(`/transaction/topup`)
export const getPackage = () => axios.get(`/transaction/package`)

export const reserveCourse = input => axios.post('/transaction/reserve',input)
export const getBalance = () => axios.get(`/transaction/balance`)