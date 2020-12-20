import { ISearchParams, ISolrResponse } from '@types'
import { solrDefaultEndpoint, solrVietnameseEndpoint } from 'apis/interceptors'

export const getDefaultSearchResult = async (
  params: ISearchParams
): Promise<ISolrResponse> => {
  const response = await solrDefaultEndpoint.get('/select', { params })
  return response.data
}

export const getVietnameseSearchResult = async (
  params: ISearchParams
): Promise<ISolrResponse> => {
  const response = await solrVietnameseEndpoint.get('/select', { params })
  return response.data
}
