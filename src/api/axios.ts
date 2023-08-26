
import axios from "axios"

const apiUrl = 'https://imhere-api.onrender.com/api/'

export const http = axios.create({
  baseURL: apiUrl,
})
