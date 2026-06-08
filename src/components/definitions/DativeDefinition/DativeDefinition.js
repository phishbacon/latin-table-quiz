import React from 'react'

import CaseDefinition from '../CaseDefinition'

const Source = () => (
  <footer className='border-l-2 border-muted pl-3 text-xs text-muted-foreground'>
    William C. Downling in{' '}
    <a
      href='http://www.wcdrutgers.net/Latin.htm'
      target='_blank'
      rel='noopener noreferrer'
      className='underline hover:text-foreground'
    >
      <cite title='Latin by the Dowling Method'>Latin by the Dowling Method (Third Concept)</cite>
    </a>
  </footer>
)

const DativeDefinition = () => (
  <CaseDefinition name='dative' subtitle={'indirect\u00a0object'} title='The Dative Case'>
    <p className='text-center'><strong>Magister dat librum discipulo.</strong></p>
    <p className='text-center'><strong>Magistri dant libros discipulis.</strong></p>
    <ol className='list-decimal pl-6'>
      <li>In the first sentence, {'"discipulo"'} is in the <i>dative singular.</i></li>
      <li>In the second sentence, {'"discipulis"'} is in the <i>dative plural.</i></li>
    </ol>
    <p>Do you see {'what\'s'} going on here?</p>
    <p>
      The <i><strong>dative</strong></i> is the Latin case that shows that a noun is the{' '}
      <i><strong>indirect object</strong></i> of the verb. (The students are the ones{' '}
      {'"to whom the books are being given"'} in both sentences.)
    </p>
    <p>
      The dative singular shows that only one student is getting or receiving the book.
      The dative plural shows that two or more students are getting the books.
    </p>
    <Source />
  </CaseDefinition>
)

export default DativeDefinition
