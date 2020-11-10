import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

const token = 'demoToken12345'

const exampleEndpoint = axios.create({ baseURL: '/example' })

const requestInterceptor = (request: AxiosRequestConfig) => {
  request.headers.Authorization = `Bearer ${token}`
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

const apiEndpoints = [exampleEndpoint]

apiEndpoints.forEach(e => {
  e.interceptors.request.use(requestInterceptor)
  e.interceptors.response.use(
    responseSuccessInterceptor,
    responseErrorInterceptor
  )
})

export default { exampleEndpoint }
