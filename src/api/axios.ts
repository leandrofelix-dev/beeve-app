import axios from 'axios'

// const apiUrl = 'https://imhere-api.onrender.com/api/'
const apiUrl = 'http://192.168.18.102:4000/api/'

export const http = axios.create({ baseURL: apiUrl })
