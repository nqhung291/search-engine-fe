export interface IRoute {
  exact?: boolean
  path: string
  name: string
  component: React.ElementType
  permissions?: IPermission[]
  icon?: React.ComponentType<{ className?: string }>
  children?: IRoute[]
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
  roles: string[]
  permissions?: string[]
}

export interface IAuthProviderValue {
  user: IUserDetailInfo | null
  signIn: (email: string, password: string) => void
  signUp: (email: string, password: string) => void
  signOut: () => void
  sendPasswordResetEmail: (email: string) => void
  confirmPasswordReset: (code: string, password: string) => void
}
