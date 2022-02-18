import {useEffect, useState} from 'react'
import {isAuthenticate} from '../auth/helpers'
import Layout from './Layout'

const Admin = () => {
  const [userRole, setUserRole] = useState('')

  useEffect(() => {
    const {role} = isAuthenticate()
    setUserRole(role)
  }, [])

  return (
    <Layout>
      <h2>Admin Page {userRole}</h2>
      {/* <h2>Admin Page</h2> */}
    </Layout>
  )
}

export default Admin
