import { IFormValue } from '@types'

export const buildQueryParams = (formValues: IFormValue) => {
  const searchQuery: string[] = []
  if (formValues.topic) {
    searchQuery.push(`topic:${formValues.topic}^2`)
  }
  if (formValues.search && formValues.search.trim() !== '') {
    searchQuery.push(`(
      title:${formValues.search} or 
      title:"${formValues.search}"^1.5 or 
      content:${formValues.search} or
      content:"${formValues.search}"^1.5)`)
  }
  if (searchQuery.length > 0) return searchQuery.join('and')
  return '*:*'
}
