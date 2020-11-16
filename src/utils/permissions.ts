import { IPermission, IRoute } from '@types'

export const permission = (
  app: IPermission['app'],
  resourceOrRole: IPermission['resourceOrRole'],
  action?: IPermission['action']
) => ({ app, resourceOrRole, action })

const getPermissionCode = (p: IPermission): string => {
  return Object.values(p)
    .filter(x => !!x)
    .join(':')
}

const checkPermissionExists = (
  permissionToCheck: IPermission,
  currentPermissions: string[]
): boolean => {
  const pCode = getPermissionCode(permissionToCheck)
  return !!(
    currentPermissions && currentPermissions.find(p => p.startsWith(pCode))
  )
}

const hasPermission = (
  route: IRoute,
  currentPermissions: string[]
): boolean => {
  const { permissions } = route
  if (!permissions) return true
  return !!permissions.find(p => checkPermissionExists(p, currentPermissions))
}

export const filterRoutesHasPermission = (
  routes: IRoute[],
  currentPermissions: string[]
): IRoute[] => {
  const res: IRoute[] = []
  if (!currentPermissions || !currentPermissions.length) {
    return res
  }
  routes.forEach(route => {
    const temp = { ...route }
    if (hasPermission(temp, currentPermissions)) {
      if (temp.children && temp.children.length > 0) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        temp.children = filterRoutesHasPermission(
          temp.children,
          currentPermissions
        )
      }
      res.push(temp)
    }
  })
  return res
}
