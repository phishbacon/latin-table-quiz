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
      <cite title='Latin by the Dowling Method'>Latin by the Dowling Method (Second Concept)</cite>
    </a>
  </footer>
)

const NominativeDefinition = () => (
  <CaseDefinition name='nominative' subtitle='subject' title='The Nominative Case'>
    <p>
      A noun occurs in the nominative case when it is the subject of the verb.
      In the sentence
    </p>
    <p className='text-center'>
      <strong>Magister dat librum discipulo.</strong>
    </p>
    <p>
      it is the nominative form of <i>magister</i> that tells you that the <i>magister</i> (teacher) is doing the giving here.
    </p>
    <Source />
  </CaseDefinition>
)

export default NominativeDefinition
