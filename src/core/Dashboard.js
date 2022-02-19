import axios from 'axios'
import React, {useState} from 'react'
import {Navigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import Layout from '../core/Layout'
import {isAuthenticate} from '../auth/helpers'

// import {useEffect, useState} from 'react'
// import Layout from './Layout'

const Dashboard = () => {
  const [name, setName] = useState('test man')
  const [role, setRole] = useState('test man')
  const [email, setEmail] = useState('testman1978@hotmail.com')
  const [password, setPassword] = useState('Password123')
  const [buttonText, setButtonText] = useState('Submit')

  const {REACT_APP_API_URL} = process.env
  console.log(`api url : ${REACT_APP_API_URL}`)

  const handleNameChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    e.preventDefault()
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setButtonText('Submitting...')

    try {
      const res = await axios({
        method: 'POST',
        url: `${REACT_APP_API_URL}/signup`,
        data: {name, email, password},
      })

      console.log(`data : ${JSON.stringify(res)}`)
      setName('')
      setEmail('')
      setPassword('')
      setButtonText('Submitted')
      toast.success(res.data.message)
    } catch (err) {
      console.log(`Signup error: ${err.response.data.error}`)
      setButtonText('Submit')
      toast.error(err.response.data.error)
    }
  }

  const updateForm = () => {
    return (
      <form>
        <div className="form-group">
          <label className="text-muted">Role:</label>
          <input value={role} type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label className="text-muted">Name:</label>
          <input
            value={name}
            onChange={handleNameChange}
            type="text"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="text-muted">Email:</label>
          <input value={email} type="email" className="form-control" />
        </div>

        <div className="form-group">
          <label className="text-muted">Password:</label>
          <input
            value={password}
            onChange={handlePasswordChange}
            type="password"
            className="form-control"
          />
        </div>
        <div>
          <button onClick={handleSubmit} className="btn btn-primary">
            {buttonText}
          </button>
        </div>
      </form>
    )
  }

  return (
    <Layout>
      <div className="col-d-6 offset-md-3">
        <h1 className="pt-5 text-center">Dashbord</h1>
        <p className="lead text-center">Profile Update</p>
        {updateForm()}
        {/* <pre>{JSON.stringify({name, email, password})}</pre> */}
      </div>
    </Layout>
  )
}

export default Dashboard

/*
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
  */
