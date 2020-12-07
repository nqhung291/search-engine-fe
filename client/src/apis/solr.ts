import { ISearchParams, ISolrResponse } from '@types'
import { solrEndpoint } from 'apis/interceptors'

export const getSearchResult = async (
  params: ISearchParams
): Promise<ISolrResponse> => {
  const response = await solrEndpoint.get('/select', { params })
  return response.data
}
