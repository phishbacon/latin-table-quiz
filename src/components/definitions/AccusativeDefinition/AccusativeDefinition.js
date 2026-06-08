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

const AccusativeDefinition = () => (
  <CaseDefinition name='accusative' subtitle={'direct\u00a0object'} title='The Accusative Case'>
    <p className='text-center'><strong>Magister dat librum discipulo.</strong></p>
    <p className='text-center'><strong>Magistri dant libros discipulis.</strong></p>
    <ol className='list-decimal pl-6'>
      <li>In the first sentence, {'"librum"'} is in the <i>accusative singular.</i></li>
      <li>In the second sentence, {'"libros"'} is in the <i>accusative plural.</i></li>
    </ol>
    <p>Do you see {'what\'s'} going on here?</p>
    <p>
      The <i><strong>accusative</strong></i> is the Latin case that shows that a noun is the{' '}
      <i><strong>direct object</strong></i> of the verb. (The books are the {'"things being given"'}{' '}
      in these sentences.)
    </p>
    <p>
      The accusative singular shows that only one book is being given. The accusative plural shows
      that two or more books are being given.
    </p>
    <Source />
  </CaseDefinition>
)

export default AccusativeDefinition
