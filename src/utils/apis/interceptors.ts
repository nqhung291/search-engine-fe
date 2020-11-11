import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import * as apiEndpoints from './endpoints'

const getToken = () => {
  return 'token_demo_12345'
}

const requestInterceptor = (request: AxiosRequestConfig) => {
  request.headers.Authorization = `Bearer ${getToken()}`
  return request
}

const responseSuccessInterceptor = (response: AxiosResponse) => {
  // Do something with response data
  return response
}

// Any status codes that falls outside the range of 2xx cause this function to trigger
const responseErrorInterceptor = (error: AxiosError) => {
  // Do something with response error
  return Promise.reject(error)
}

Object.values(apiEndpoints).forEach(endpoint => {
  endpoint.interceptors.request.use(requestInterceptor)
  endpoint.interceptors.response.use(
    responseSuccessInterceptor,
    responseErrorInterceptor
  )
})

export default apiEndpoints
