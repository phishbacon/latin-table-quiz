import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { signUp, signIn } from '../../api/auth'
import { useAppContext } from '../../context/AppContext'
import messages from '../AutoDismissAlert/messages'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

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
    <div className='mx-auto mt-10 max-w-lg space-y-6'>
      <h3 className='text-2xl font-semibold tracking-tight'>Sign Up</h3>
      <form onSubmit={onSignUp} className='space-y-4'>
        <div className='space-y-2'>
          <Label htmlFor='email'>Email address</Label>
          <Input
            id='email'
            required
            type='email'
            name='email'
            value={form.email}
            placeholder='Enter email'
            onChange={handleChange}
          />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='password'>Password</Label>
          <Input
            id='password'
            required
            name='password'
            value={form.password}
            type='password'
            placeholder='Password'
            onChange={handleChange}
          />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='passwordConfirmation'>Password Confirmation</Label>
          <Input
            id='passwordConfirmation'
            required
            name='passwordConfirmation'
            value={form.passwordConfirmation}
            type='password'
            placeholder='Confirm Password'
            onChange={handleChange}
          />
        </div>
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  )
}

export default SignUp
