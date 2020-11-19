import { ISearchParams, ITableData } from '@types'
import { demoData } from 'constants/demo'
import { solrEndpoint } from 'apis/interceptors'

export const getSearchResult = async (
  params: ISearchParams
): Promise<ITableData[]> => {
  const response = await solrEndpoint.get('/search', { params })
  return response.data
}
export const getDemoSearchResult = (params: ISearchParams) => {
  return new Promise<ITableData[]>((resolve, reject) => {
    resolve(demoData)
  })
}
