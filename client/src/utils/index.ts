import { IFormValue } from '@types'

export const buildQueryParams = (formValues: IFormValue) => {
  const searchQuery: string[] = []
  if (formValues.topic) {
    searchQuery.push(`topic:${formValues.topic}^2`)
  }
  const query = formValues.search?.trim()
  if (query && query !== '') {
    searchQuery.push(`(
      title:${query} or 
      title:"${query}"^1.5 or 
      content:${query} or
      content:"${query}"^1.5)`)
  }
  if (searchQuery.length > 0) return searchQuery.join('and')
  return '*:*'
}
