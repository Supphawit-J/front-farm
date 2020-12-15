import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { DataContext } from '../context/DataContext'
function PrivateRoute ({ component: Component, ...rest }) {
  const { state } = useContext(DataContext)
  return (
    <Route
      {...rest}
      render={props => state === true ? (<Component {...props} />) : (<Redirect to="/"/>)
      }
    />
  )
}

export default PrivateRoute
