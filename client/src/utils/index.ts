import { IFormValue } from '@types'

export const buildQueryParams = (formValues: IFormValue) => {
  return Object.entries(formValues)
    .filter(([key, value]) => !!value)
    .map(([key, value]) => `${key}:${value}`)
    .join(' and ')
}
