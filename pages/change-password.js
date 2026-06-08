import { useEffect } from 'react'
import { useRouter } from 'next/router'

import ChangePassword from '../src/components/ChangePassword/ChangePassword'
import { useAppContext } from '../src/context/AppContext'

export default function ChangePasswordPage () {
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

  return <ChangePassword />
}
