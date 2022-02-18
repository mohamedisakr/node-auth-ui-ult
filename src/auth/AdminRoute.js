import {Navigate} from 'react-router-dom'
import {isAuthenticate} from './helpers'

const AdminRoute = ({children}) => {
  const user = isAuthenticate()
  console.log(`user : ${JSON.stringify(user)}`)
  const isAdmin = user.role.toLowerCase() === 'admin'.toLowerCase()
  // user && user?.role && user?.role.toLowerCase() === 'admin'.toLowerCase()
  return isAdmin ? children : <Navigate to="/signin" />
}

export default AdminRoute
