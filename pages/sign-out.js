import { useEffect } from 'react'
import { useRouter } from 'next/router'

import SignOut from '../src/components/SignOut/SignOut'
import { useAppContext } from '../src/context/AppContext'

export default function SignOutPage () {
  const router = useRouter()
  const { user } = useAppContext()

  useEffect(() => {
    if (!user) {
      router.replace('/')
    }
  }, [router, user])

  if (!user) {
    return null
  }

  return <SignOut />
}
