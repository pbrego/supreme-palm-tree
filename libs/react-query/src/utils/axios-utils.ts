import axios from 'axios'

const BASE_URL = 'http://localhost:4000'
const client = axios.create({ baseURL: BASE_URL })

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = 'Bearer token'
  const onSuccess = response => {
    console.log('all ok')
    return response
  }
  const onError = error => {
    console.log('error status', error.status)
    throw error
  }

  return await client(options).then(onSuccess).catch(onError)
}
