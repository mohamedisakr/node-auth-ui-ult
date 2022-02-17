import React, {useState} from 'react'
import Layout from '../core/Layout'

const Signup = () => {
  const [name, setName] = useState('test man')
  const [email, setEmail] = useState('testman1978@hotmail.com')
  const [password, setPassword] = useState('Password123')
  const [buttonText, setButtonText] = useState('Submit')

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

  const handleSubmit = (e) => {
    e.preventDefault()
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
        <h1 className="p-5 text-center">Signup</h1>
        {signupForm()}
        {/* <pre>{JSON.stringify({name, email, password})}</pre> */}
      </div>
    </Layout>
  )
}

export default Signup
