import { IFormValue } from '@types'

export const buildQueryParams = (formValues: IFormValue) => {
  return `topic:"${formValues.topic}"^2 and (
            title:${formValues.search} or 
            title:"${formValues.search}"^1.5 or 
            content:${formValues.search} or
            content:"${formValues.search}"^1.5)`
}
