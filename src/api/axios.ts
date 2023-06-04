import Constants from 'expo-constants'
const apiUrl = Constants.expoConfig?.extra?.apiUrl
import axios from "axios"

export const http = axios.create({
  baseURL: apiUrl,
})
