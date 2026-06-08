import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { signOut } from '../../api/auth'
import { useAppContext } from '../../context/AppContext'
import messages from '../AutoDismissAlert/messages'

const SignOut = () => {
  const router = useRouter()
  const { msgAlert, clearUser, user } = useAppContext()

  useEffect(() => {
    signOut(user)
      .finally(() => msgAlert({
        heading: 'Signed Out Successfully',
        message: messages.signOutSuccess,
        variant: 'success'
      }))
      .finally(() => router.push('/'))
      .finally(() => clearUser())
  }, [clearUser, msgAlert, router, user])

  return null
}

export default SignOut
