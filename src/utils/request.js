//引入axios
import axios from 'axios'
const newAxios = axios.create({
  baseURL: 'http://localhost:3000'
})
export default newAxios
