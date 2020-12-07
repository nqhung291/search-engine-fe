export interface ITableData {
  url: string
  topic: string
  title: string
  content?: string
  id: string
}

export interface ISolrResponse {
  responseHeader: any
  response: {
    numFound: number
    start: number
    numFoundExact: boolean
    docs: ITableData[]
  }
}
export interface ISearchParams {
  q: string
  fl?: string
  start?: number
  rows?: number
}
export interface IFormValue {
  title: string
  content: string
}
