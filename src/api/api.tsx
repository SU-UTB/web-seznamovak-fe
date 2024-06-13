import axios from 'axios'

const api = axios.create({
  baseURL: 'https://seznamovak.utb.cz/api',
  headers: {
    'Content-type': 'application/json',
  },
})

export default api
