import {decode} from 'jsonwebtoken'
import axios from 'axios'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {toast} from 'react-toastify'
import Layout from '../core/Layout'

const Reset = () => {
  const [name, setName] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [buttonText, setButtonText] = useState('Reset Password')

  const {token} = useParams()
  const {REACT_APP_API_URL} = process.env

  useEffect(() => {
    console.log(token)
    const {name} = decode(token)
    if (token) {
      setName(name)
    }
  }, [])

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setButtonText('Submitting...')

    try {
      const res = await axios({
        method: 'PUT',
        url: `${REACT_APP_API_URL}/reset-password`,
        data: {newPassword, resetPasswordLink: token},
      })

      console.log(`reset password data : ${JSON.stringify(res)}`)
      toast.success(res.data.message)
      setButtonText('Done')
    } catch (err) {
      console.log(
        `reset password error: ${JSON.stringify(err.response.data.error)}`,
      )
      setButtonText('Reset Password')
      toast.error(err.response.data.message)
      toast.error(err.response.data.error)
    }
  }

  const passwordResetForm = () => {
    return (
      <form>
        <div className="form-group">
          <label className="text-muted">New Password:</label>
          <input
            value={newPassword}
            onChange={handlePasswordChange}
            type="password"
            className="form-control"
            placeholder="Type new password"
            required
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
        <h1 className="p-5 text-center">
          Hello {name}. You can reset your password
        </h1>
        {passwordResetForm()}
      </div>
    </Layout>
  )
}

export default Reset
