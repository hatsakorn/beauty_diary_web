import axios from '../configs/axios'

export const getAllTransaction = (userId) => axios.get(`/transaction/get/${userId}`)
export const getTopup = (userId) => axios.get(`/transaction/topup/${userId}`)
export const getPackage = (userId) => axios.get(`/transaction/package/${userId}`)

export const reserveCourse = input => axios.post('/transaction/reserve',input)