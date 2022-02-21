import axios from 'axios'
import {useState} from 'react'
import {toast} from 'react-toastify'
import Layout from '../core/Layout'

const Forgot = () => {
  const [email, setEmail] = useState('')
  const [buttonText, setButtonText] = useState('Request password reset')

  const {REACT_APP_API_URL} = process.env

  const handleEmailChange = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setButtonText('Submitting...')

    try {
      const res = await axios({
        method: 'PUT',
        url: `${REACT_APP_API_URL}/forgot-password`,
        data: {email},
      })

      console.log(`forgot password data : ${JSON.stringify(res)}`)
      toast.success(res.data.message)
      setButtonText('Requested')
    } catch (err) {
      console.log(
        `forgot password error: ${JSON.stringify(err.response.data.error)}`,
      )
      setButtonText('Request password reset')
      toast.error(err.response.data.message)
      toast.error(err.response.data.error)
    }
  }

  const forgotPasswordForm = () => {
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
        <h1 className="p-5 text-center">Forgot Password</h1>
        {forgotPasswordForm()}
      </div>
    </Layout>
  )
}

export default Forgot
