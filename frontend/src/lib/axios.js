import axios from 'axios'
import { Meta } from 'react-router';
const axiosInstance=axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    withCredentials:true// browser will send the cookies automatically to server , every single req

})

export default axiosInstance;