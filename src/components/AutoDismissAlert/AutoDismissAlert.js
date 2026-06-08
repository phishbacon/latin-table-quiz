import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const variantClass = {
  success: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-900 dark:text-emerald-100',
  danger: 'border-destructive/40 bg-destructive/10 text-destructive',
  warning: 'border-amber-500/40 bg-amber-500/10 text-amber-900 dark:text-amber-100',
  info: 'border-sky-500/40 bg-sky-500/10 text-sky-900 dark:text-sky-100'
}

const AutoDismissAlert = ({ variant = 'info', heading, message, deleteAlert, id }) => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timeoutId = setTimeout(() => setShow(false), 5000)
    return () => clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    if (!show) {
      const removeId = setTimeout(() => deleteAlert(id), 300)
      return () => clearTimeout(removeId)
    }
  }, [show, id, deleteAlert])

  return (
    <div
      className={cn(
        'pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 transition duration-300',
        show ? 'animate-in slide-in-from-bottom-4 fade-in opacity-100' : 'fade-out opacity-0'
      )}
    >
      <Alert className={cn('pointer-events-auto w-full max-w-md shadow-lg', variantClass[variant] || variantClass.info)}>
        <div className='flex flex-1 flex-col gap-1 pr-6'>
          <AlertTitle>{heading}</AlertTitle>
          <AlertDescription>{message}</AlertDescription>
        </div>
        <Button
          aria-label='Dismiss alert'
          variant='ghost'
          size='icon-sm'
          onClick={() => setShow(false)}
          className='absolute right-2 top-2 text-current hover:bg-current/10'
        >
          <X />
        </Button>
      </Alert>
    </div>
  )
}

export default AutoDismissAlert
