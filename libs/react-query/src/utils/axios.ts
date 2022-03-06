import axios from 'axios'

const BASE_URL = 'http://localhost:4000'

const client = axios.create({ baseURL: BASE_URL })

client.interceptors.response.use(function (response) {
  console.log('interceptor ok', response)
  return response
}, function (error) {
  console.log('interceptor error', error)

  if (error && error.response && error.response.status === 404) {
    console.log('interceptor error: 404 not found')
  }

  if (error && !error.response) {
    console.log('interceptor error: Network Error')
  }

  return Promise.reject(error)
})

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = 'Bearer token'

  const onError = error => {
    console.log('service error', error)
    throw error
  }

  const onSuccess = response => {
    console.log('service ok', response)
    if (response.status === 200) {
      console.log('service ok: 200')
      return response
    } else { onError(response) }
  }

  return client(options).then(onSuccess).catch(onError)
}
