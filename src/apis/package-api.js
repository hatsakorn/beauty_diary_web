import axios from '../configs/axios'

export const createPackage = input => axios.post('/package/create',input)