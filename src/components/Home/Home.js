import React from 'react'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'

const Home = () => {
  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h1>Latin Table Quiz</h1>
        <div>Practice Latin grammar tables using the Ranieri-Dowling method.</div>
        <Link href='/practice-options' passHref legacyBehavior>
          <Button as='a' className='mt-3' variant='primary' type='submit'>
            Practice
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Home
