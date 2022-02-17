import axios from 'axios'
import {decode} from 'jsonwebtoken'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {toast} from 'react-toastify'
import Layout from '../core/Layout'

const Activate = () => {
  const [name, setName] = useState('')
  const [show, setShow] = useState(true)
  const {token} = useParams()

  const {REACT_APP_API_URL} = process.env

  useEffect(() => {
    console.log(token)
    const {name} = decode(token)
    if (token) {
      setName(name)
    }
  }, [token])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios({
        method: 'POST',
        url: `${REACT_APP_API_URL}/activate`,
        data: {token},
      })

      console.log(`Account activation : ${JSON.stringify(res)}`)
      setName('')
      setShow(false)

      toast.success(res.data.message)
    } catch (err) {
      console.log(`Account activation error: ${err.response.data.message}`)
      console.log(
        `Account activation error: ${JSON.stringify(err.response.data)}`,
      )
      toast.error(err.response.data.message)
    }
  }

  const activateLink = () => {
    return (
      <div className="text-center">
        <h1 className="p-5">Hello {name} activate your account</h1>
        <button className="btn btn-outline-primary" onClick={handleSubmit}>
          Activate Your Account
        </button>
      </div>
    )
  }
  return (
    <Layout>
      <div className="col-d-6 offset-md-3">{activateLink()}</div>
    </Layout>
  )
}

export default Activate
