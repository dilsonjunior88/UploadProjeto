import axios from 'axios'

const apiCamaraDeputados = axios.create({
    baseURL: "https://dadosabertos.camara.leg.br/api/v2/",
    headers: {
        'content-type': 'application/json;charset=utf-8'
    }
})

export default apiCamaraDeputados