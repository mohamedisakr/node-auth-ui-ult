import {Navigate} from 'react-router-dom'
import {isAdmin, isAuthenticate} from './helpers'

const AdminRoute = ({children}) => {
  const user = isAdmin() // isAuthenticate()
  console.log(`user : ${JSON.stringify(user)}`)
  //   const isAdmin =
  //     user && user.role && user.role.toLowerCase() === 'admin'.toLowerCase()
  // user && user?.role && user?.role.toLowerCase() === 'admin'.toLowerCase()
  return user ? children : <Navigate to="/" />
}

export default AdminRoute
