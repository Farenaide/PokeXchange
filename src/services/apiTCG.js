import axios from "axios";

const keyApi = 'd87b3db6-cdca-4ae6-83e9-31a5026dd643'
const urlApi = 'https://api.pokemontcg.io/v2'

const apiTCG = axios.create({
    baseURL: urlApi,
    Headers: {
        'X-Api-Key': keyApi
    }
})

export default apiTCG