import React, {useEffect, useState} from 'react'
import {isAuthenticate} from '../auth/helpers'
import Layout from './Layout'

const Dashboard = () => {
  // const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  useEffect(() => {
    const {name} = isAuthenticate()
    setUserName(name)
  }, [])

  return (
    <Layout>
      <h2>{userName} Dashboard</h2>
    </Layout>
  )
}

export default Dashboard
