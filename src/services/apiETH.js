import axios from "axios";

const urlApi = 'https://economia.awesomeapi.com.br/last'

const apiETH = axios.create({
    baseURL: urlApi,
})

export default apiETH