import { IRoute } from '@types'
import React from 'react'
import { Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }: IRoute) => {
  return (
    <Route {...rest} render={routeProps => <Component {...routeProps} />} />
  )
}

export default PrivateRoute
