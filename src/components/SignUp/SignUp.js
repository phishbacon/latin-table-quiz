import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { signUp, signIn } from '../../api/auth'
import { useAppContext } from '../../context/AppContext'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignUp = () => {
  const router = useRouter()
  const { msgAlert, setUser } = useAppContext()
  const [form, setForm] = useState({
    email: '',
    password: '',
    passwordConfirmation: ''
  })

  const handleChange = event => setForm({
    ...form,
    [event.target.name]: event.target.value
  })

  const onSignUp = event => {
    event.preventDefault()

    signUp(form)
      .then(() => signIn(form))
      .then(res => setUser(res.data.user))
      .then(() => msgAlert({
        heading: 'Sign Up Success',
        message: messages.signUpSuccess,
        variant: 'success'
      }))
      .then(() => router.push('/'))
      .catch(error => {
        setForm({ email: '', password: '', passwordConfirmation: '' })
        msgAlert({
          heading: 'Sign Up Failed with error: ' + error.message,
          message: messages.signUpFailure,
          variant: 'danger'
        })
      })
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Sign Up</h3>
        <Form onSubmit={onSignUp}>
          <Form.Group controlId='email'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type='email'
              name='email'
              value={form.email}
              placeholder='Enter email'
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              name='password'
              value={form.password}
              type='password'
              placeholder='Password'
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId='passwordConfirmation'>
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              required
              name='passwordConfirmation'
              value={form.passwordConfirmation}
              type='password'
              placeholder='Confirm Password'
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default SignUp
