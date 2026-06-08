import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { signIn } from '../../api/auth'
import { useAppContext } from '../../context/AppContext'
import messages from '../AutoDismissAlert/messages'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const SignIn = () => {
  const router = useRouter()
  const { msgAlert, setUser } = useAppContext()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = event => setForm({
    ...form,
    [event.target.name]: event.target.value
  })

  const onSignIn = event => {
    event.preventDefault()

    signIn(form)
      .then(res => setUser(res.data.user))
      .then(() => msgAlert({
        heading: 'Sign In Success',
        message: messages.signInSuccess,
        variant: 'success'
      }))
      .then(() => router.push('/'))
      .catch(error => {
        setForm({ email: '', password: '' })
        msgAlert({
          heading: 'Sign In Failed with error: ' + error.message,
          message: messages.signInFailure,
          variant: 'danger'
        })
      })
  }

  return (
    <div className='mx-auto mt-10 max-w-lg space-y-6'>
      <h3 className='text-2xl font-semibold tracking-tight'>Sign In</h3>
      <form onSubmit={onSignIn} className='space-y-4'>
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
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  )
}

export default SignIn
