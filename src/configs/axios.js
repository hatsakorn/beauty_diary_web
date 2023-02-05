import axios from 'axios'


axios.defaults.baseURL = process.env.REACT_APP_ENDPOINT_URL

console.log(process.env.REACT_APP_ENDPOINT_URL)

export default axios