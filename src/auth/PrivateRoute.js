import {Navigate} from 'react-router-dom'
import {isAuthenticate} from './helpers'

const PrivateRoute = ({children}) => {
  const user = isAuthenticate()
  console.log(`user : ${JSON.stringify(user)}`)
  return user ? children : <Navigate to="/signin" />
}

export default PrivateRoute

/*
const PrivateRoute = ({children, ...rest}) => {
  return (
    <Route
      {...rest}
      render={({location}) =>
        isAuthenticate().user ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: '/signin',
              state: {from: location},
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
*/
