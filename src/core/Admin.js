import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import Layout from '../core/Layout'
import {getCookie, isAuthenticate, signout, updateUser} from '../auth/helpers'

const Admin = () => {
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [buttonText, setButtonText] = useState('Submit')

  const token = getCookie('token')
  const navigate = useNavigate()
  const {REACT_APP_API_URL} = process.env
  // console.log(`api url : ${REACT_APP_API_URL}`)

  useEffect(() => {
    loadProfile()
  }, [])

  const loadProfile = async () => {
    const id = isAuthenticate()._id
    try {
      const res = await axios({
        method: 'GET',
        url: `${REACT_APP_API_URL}/user/${id}`,
        headers: {Authorization: `Bearer ${token}`},
      })

      console.log(`data : ${JSON.stringify(res.data)}`)
      const {name, email, role} = res.data

      setRole(role)
      setName(name)
      setEmail(email)
    } catch (err) {
      console.log(`Signup error: ${err.response.data.error}`)
      if (err.response.status === 401) {
        signout(() => {
          navigate('/')
        })
      }
      setButtonText('Submit')
      toast.error(err.response.data.error)
    }
  }

  const handleNameChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handlePasswordChange = (e) => {
    e.preventDefault()
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios({
        method: 'PUT',
        url: `${REACT_APP_API_URL}/admin/update`,
        headers: {Authorization: `Bearer ${token}`},
        data: {name, password},
      })

      console.log(`data : ${JSON.stringify(res)}`)
      updateUser(res, () => {
        setButtonText('Submitted')
        toast.success('Profile updated successfully.')
      })
    } catch (err) {
      // console.log(`Signup error: ${err.response.data.error}`)
      console.log(`Signup error: ${err.response.data.message}`)
      setButtonText('Submit')
      toast.error(err.response.data.message)
    }
  }

  const updateForm = () => {
    return (
      <form>
        <div className="form-group">
          <label className="text-muted">Role:</label>
          <input
            defaultValue={role}
            type="text"
            className="form-control"
            readOnly
          />
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
          <input
            defaultValue={email}
            type="email"
            className="form-control"
            readOnly
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
        <h1 className="pt-5 text-center">Admin</h1>
        <p className="lead text-center">Profile Update</p>
        {updateForm()}
        {/* <pre>{JSON.stringify({name, email, password})}</pre> */}
      </div>
    </Layout>
  )
}

export default Admin

/*
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
    
    </Layout>
  )
}

export default Admin
*/
