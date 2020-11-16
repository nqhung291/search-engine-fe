export interface IRoute {
  exact?: boolean
  path: string
  name: string
  component: React.ElementType
  permissions?: IPermission[]
  icon?: React.ComponentType<{ className?: string }>
  children?: string[]
}

export interface IPermission {
  app: string
  resourceOrRole: string
  action?: string
}

export interface IUserDetailInfo {
  name?: string
  accessToken?: string
  email?: string
  authorities?: string[]
}
