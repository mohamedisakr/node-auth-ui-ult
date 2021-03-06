import axios from 'axios'
import React, {useState} from 'react'
import {Link, Navigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import Layout from '../core/Layout'
import {isAuthenticate} from './helpers'

const Signup = () => {
  const [name, setName] = useState('test man')
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

  const signupForm = () => {
    return (
      <form>
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
          <input
            value={email}
            onChange={handleEmailChange}
            type="email"
            className="form-control"
          />
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
        {isAuthenticate() ? <Navigate to="/" /> : null}
        <h1 className="p-5 text-center">Signup</h1>
        {signupForm()}
        <br />
        <Link to="/forgot" className="btn btn-sm btn-outline-danger">
          Forget Password
        </Link>
        {/* <pre>{JSON.stringify({name, email, password})}</pre> */}
      </div>
    </Layout>
  )
}

export default Signup
