import { IFormValue } from '@types'

export const buildQueryParams = (formValues: IFormValue) => {
  return `topic:"${formValues.topic}" and (title:${formValues.search} or content:${formValues.search})`
}
