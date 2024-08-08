// axiosInstance.js
import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'http://localhost:81/aircall-api/api.php',
  headers: { 'Content-Type': 'application/json' }
});

export default AxiosInstance;
