import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

const requestInterceptor = (config: AxiosRequestConfig) => {
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

const solrDefaultEndpoint = axios.create({
  baseURL: `${process.env.REACT_APP_SOLR_API}/news-default/`,
  timeout: 10000
})

const solrVietnameseEndpoint = axios.create({
  baseURL: `${process.env.REACT_APP_SOLR_API}/news-vi/`,
  timeout: 10000
})

const endpoints = [solrDefaultEndpoint]

endpoints.forEach(endpoint => {
  endpoint.interceptors.request.use(requestInterceptor)
  endpoint.interceptors.response.use(
    responseSuccessInterceptor,
    responseErrorInterceptor
  )
})

export { solrDefaultEndpoint, solrVietnameseEndpoint }
