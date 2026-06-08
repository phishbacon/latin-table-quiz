import React from 'react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const Home = () => (
  <div className='mx-auto mt-10 max-w-2xl space-y-4'>
    <h1 className='text-4xl font-bold tracking-tight'>Latin Table Quiz</h1>
    <p className='text-muted-foreground'>
      Practice Latin grammar tables using the Ranieri-Dowling method.
    </p>
    <Button asChild className='mt-3'>
      <Link href='/practice-options'>Practice</Link>
    </Button>
  </div>
)

export default Home
