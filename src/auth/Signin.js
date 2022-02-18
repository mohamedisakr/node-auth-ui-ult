import axios from 'axios'
import React, {useState} from 'react'
import {Navigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import Layout from '../core/Layout'
import {authenticate, isAuthenticate} from './helpers'

const Signin = () => {
  const [email, setEmail] = useState('testman1978@hotmail.com')
  const [password, setPassword] = useState('Password123')
  const [buttonText, setButtonText] = useState('Submit')

  const {REACT_APP_API_URL} = process.env
  //   console.log(`api url : ${REACT_APP_API_URL}`)

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
        url: `${REACT_APP_API_URL}/signin`,
        data: {email, password},
      })

      // console.log(`Signin data : ${JSON.stringify(res)}`)

      // save {token, user} to local storage & cookie & redux
      authenticate(res, () => {
        setEmail('')
        setPassword('')
        setButtonText('Submitted')
        toast.success(`Hello ${res.data.user.name}!`)
      })
    } catch (err) {
      //   console.log(`Signin error: ${err.response.data.error}`)
      console.log(`Signin error: ${JSON.stringify(err.response.data.message)}`)
      setButtonText('Submit')
      toast.error(err.response.data.message)
    }
  }

  const signinForm = () => {
    return (
      <form>
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
        <h1 className="p-5 text-center">Signin</h1>
        {signinForm()}
        {/* <pre>User authenticated {JSON.stringify(isAuthenticate())}</pre> */}
      </div>
    </Layout>
  )
}

export default Signin
