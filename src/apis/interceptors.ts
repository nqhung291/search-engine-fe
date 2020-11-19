import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

const getToken = () => {
  return 'token_demo_12345'
}

const requestInterceptor = (config: AxiosRequestConfig) => {
  config.headers.Authorization = `Bearer ${getToken()}`
  return config
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

const solrEndpoint = axios.create({ baseURL: '/solr', timeout: 10000 })

const endpoints = [solrEndpoint]

endpoints.forEach(endpoint => {
  endpoint.interceptors.request.use(requestInterceptor)
  endpoint.interceptors.response.use(
    responseSuccessInterceptor,
    responseErrorInterceptor
  )
})

export { solrEndpoint }
