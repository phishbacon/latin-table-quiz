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
      <cite title='Latin by the Dowling Method'>Latin by the Dowling Method (Fifth Concept)</cite>
    </a>
  </footer>
)

const AblativeDefinition = () => (
  <CaseDefinition name='ablative' subtitle='prepositions' title='The Ablative Case'>
    <p>
      In Latin, the <i><strong>ablative</strong></i> tends to do the work that we do in English with
      common <i><strong>prepositions</strong></i> (<i>of, on, with, by, for, etc</i>).
    </p>
    <p>
      Each of these little words signals some sort of relation between the noun and something else.
      For instance, you can say
    </p>
    <p className='text-center'><strong>The teacher puts the book on the table.</strong></p>
    <p>
      Here, the relation signalled by the preposition on is spatial: when the action is complete,
      one object (a book) is on top of another object (a table) as a result.
    </p>
    <p>
      This is exactly what happens with the ablative in Latin. {'Here\'s the same sentence in Latin with "table"'}{' '}
      (mensa) in the ablative:
    </p>
    <p className='text-center'><strong>Magister librum in mensa ponit.</strong></p>
    <p>
      The key is this: when you see an ablative in a Latin sentence, ask yourself what relation it
      is trying to signal between the noun in the ablative case and everything else in the sentence.
      Then you will figure out its meaning {'"intuitively."'}
    </p>
    <Source />
  </CaseDefinition>
)

export default AblativeDefinition
