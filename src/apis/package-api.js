import axios from '../configs/axios'

export const getPackage = () => axios.get('/package/get')
export const createPackage = input => axios.post('/package/create',input)
export const editPackage = input => axios.patch('/package/edit',input)
export const deletePackage = id => axios.delete(`/package/delete/${id}`)

export const buyPackage = input => axios.post('/package/buy',input)