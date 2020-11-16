import { IPermission, IRoute } from '@types'

const permission = (
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

const isRouteVisible = (
  route: IRoute,
  currentPermissions: string[]
): boolean => {
  const { permissions } = route
  if (!permissions) return true
  return !!permissions.find(p => checkPermissionExists(p, currentPermissions))
}

// const filterRoutes = (
//   routes: IRoute[],
//   currentPermissions: string[]
// ): IRoute[] => {
//   const res: IRoute[] = []
//   routes.filter(route => {
//     if (!route.children || route.children.length === 0) {
//       return isRouteVisible(route, currentPermissions)
//     }
//   })
// }
