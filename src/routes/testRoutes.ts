import { IRoute } from '@types'
import { lazy } from 'react'

const Example = lazy(() => import('components/Example'))
const Example2 = lazy(() => import('components/Example2'))
const Example3 = lazy(() => import('components/Example3'))

const routes: IRoute[] = [
  { path: '/test', exact: true, name: 'Test Component', component: Example },
  {
    path: '/test2',
    exact: true,
    name: 'Test Component 2',
    component: Example2,
    children: [
      {
        path: '/test3',
        exact: true,
        name: 'Child component 3',
        component: Example3
      }
    ]
  }
]

export default routes
