import React from 'react'

import CaseDefinition from '../CaseDefinition'

const Source = () => (
  <footer className='border-l-2 border-muted pl-3 text-xs text-muted-foreground'>
    Wikipedia Contributors in the{' '}
    <a
      href='https://en.wikipedia.org/wiki/Vocative_case'
      target='_blank'
      rel='noopener noreferrer'
      className='underline hover:text-foreground'
    >
      <cite title='Vocative Case'>Vocative Case</cite>
    </a>
  </footer>
)

const VocativeDefinition = () => (
  <CaseDefinition name='vocative' subtitle={'being\u00a0addressed'} title='The Vocative Case'>
    <p>
      In Latin, the <i><strong>vocative</strong></i> case is the grammatical case which is used for
      a noun that identifies a person (animal, object, etc.) being addressed.
    </p>
    <p>
      For example, in the sentence {'"I don\'t know, John,"'} John is a vocative expression that
      indicates the party being addressed, as opposed to the sentence{' '}
      {'"I don\'t know John" in which "John" is the direct object of the verb "know"'}.
    </p>
    <p>1) In Latin, the form of the vocative case of a noun is often the same as the nominative.</p>
    <p className='text-center'><strong>Salve, Livia!</strong></p>
    <p>
      2) Nouns that end in -ius end with -ī. Thus, Julius becomes Julī and filius becomes filī.
    </p>
    <p className='text-center'><strong>Salve, Julī!</strong></p>
    <p>
      3) Other second declension singular nouns that end in -us end with -e. Thus, Brutus becomes
      Brute and Amīcus becomes Amīce.
    </p>
    <p className='text-center'><strong>Et tu, Brute?</strong></p>
    <Source />
  </CaseDefinition>
)

export default VocativeDefinition
