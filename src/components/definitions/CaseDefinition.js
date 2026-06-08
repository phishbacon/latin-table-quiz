import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

const CaseDefinition = ({ name, subtitle, title, children }) => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant='link'
          className='h-auto whitespace-normal px-0 py-0 text-base text-current'
        >
          <span className='text-center leading-tight'>
            {name}
            <br className='hidden sm:inline' />
            {' '}
            <small className='text-muted-foreground'>({subtitle})</small>
          </span>
        </Button>
      </DialogTrigger>

      <DialogContent className='sm:max-w-2xl'>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <Card className='border-0 shadow-none'>
          <CardContent className='space-y-3 px-0 text-sm leading-relaxed'>
            {children}
          </CardContent>
        </Card>

        <DialogFooter>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CaseDefinition
