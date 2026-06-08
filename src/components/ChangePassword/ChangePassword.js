import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { changePassword } from '../../api/auth'
import { useAppContext } from '../../context/AppContext'
import messages from '../AutoDismissAlert/messages'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const ChangePassword = () => {
  const router = useRouter()
  const { msgAlert, user } = useAppContext()
  const [form, setForm] = useState({
    oldPassword: '',
    newPassword: ''
  })

  const handleChange = event => setForm({
    ...form,
    [event.target.name]: event.target.value
  })

  const onChangePassword = event => {
    event.preventDefault()

    changePassword(form, user)
      .then(() => msgAlert({
        heading: 'Change Password Success',
        message: messages.changePasswordSuccess,
        variant: 'success'
      }))
      .then(() => router.push('/'))
      .catch(error => {
        setForm({ oldPassword: '', newPassword: '' })
        msgAlert({
          heading: 'Change Password Failed with error: ' + error.message,
          message: messages.changePasswordFailure,
          variant: 'danger'
        })
      })
  }

  return (
    <div className='mx-auto mt-10 max-w-lg space-y-6'>
      <h3 className='text-2xl font-semibold tracking-tight'>Change Password</h3>
      <form onSubmit={onChangePassword} className='space-y-4'>
        <div className='space-y-2'>
          <Label htmlFor='oldPassword'>Old password</Label>
          <Input
            id='oldPassword'
            required
            name='oldPassword'
            value={form.oldPassword}
            type='password'
            placeholder='Old Password'
            onChange={handleChange}
          />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='newPassword'>New Password</Label>
          <Input
            id='newPassword'
            required
            name='newPassword'
            value={form.newPassword}
            type='password'
            placeholder='New Password'
            onChange={handleChange}
          />
        </div>
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  )
}

export default ChangePassword
