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
      <cite title='Latin by the Dowling Method'>Latin by the Dowling Method (Fourth Concept)</cite>
    </a>
  </footer>
)

const GenitiveDefinition = () => (
  <CaseDefinition name='genitive' subtitle='possession' title='The Genitive Case'>
    <p>
      The genitive case in Latin usually signals some idea of possession. Somebody or something owns
      or possesses something else. Here are a couple of simple examples in English of how the
      genitive works:
    </p>
    <p className='text-center'><strong>{'The boy\'s hat was bright red.'}</strong></p>
    <p className='text-center'><strong>The roof of the house was made of tile.</strong></p>
    <p className='text-center'><strong>{'The teacher\'s book is large.'}</strong></p>
    <p>
      Now look at the last of these sentences. {'I\'m'} about to give you the same sentence in
      Latin. Here it is:
    </p>
    <p className='text-center'><strong>Liber magistri magnus est.</strong></p>
    <p>
      As always, it is the <i>form</i> of the noun that tells you what the grammatical function is.
      In technical terms, you only have to say that {'"magistri"'} in the sentence above is in the
      genitive case, and to understand what that means all you have to understand is that the book
      belongs to the teacher.
    </p>
    <Source />
  </CaseDefinition>
)

export default GenitiveDefinition
