import React, { Fragment, useState, useEffect } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

import { removeMacrons } from '../../utils'
import styles from './DeclensionPractice.module.css'

import messages from '../AutoDismissAlert/messages'
import NominativeDefinition from '../definitions/NominativeDefinition/NominativeDefinition'
import GenitiveDefinition from '../definitions/GenitiveDefinition/GenitiveDefinition'
import AccusativeDefinition from '../definitions/AccusativeDefinition/AccusativeDefinition'
import DativeDefinition from '../definitions/DativeDefinition/DativeDefinition'
import AblativeDefinition from '../definitions/AblativeDefinition/AblativeDefinition'
import VocativeDefinition from '../definitions/VocativeDefinition/VocativeDefinition'

const definitionByCase = {
  nominative: NominativeDefinition,
  genitive: GenitiveDefinition,
  accusative: AccusativeDefinition,
  dative: DativeDefinition,
  ablative: AblativeDefinition,
  vocative: VocativeDefinition
}

const labelGridClassMap = {
  nominative: styles.nominativeLabel,
  genitive: styles.genitiveLabel,
  dative: styles.dativeLabel,
  accusative: styles.accusativeLabel,
  ablative: styles.ablativeLabel,
  vocative: styles.vocativeLabel
}

const fieldGridClassMap = {
  nominativeSingular: styles.nominativeSingular,
  genitiveSingular: styles.genitiveSingular,
  dativeSingular: styles.dativeSingular,
  accusativeSingular: styles.accusativeSingular,
  ablativeSingular: styles.ablativeSingular,
  vocativeSingular: styles.vocativeSingular,
  nominativePlural: styles.nominativePlural,
  genitivePlural: styles.genitivePlural,
  dativePlural: styles.dativePlural,
  accusativePlural: styles.accusativePlural,
  ablativePlural: styles.ablativePlural,
  vocativePlural: styles.vocativePlural
}

const getGendersDisplay = genders => genders.map((gender, index) => (
  <Fragment key={index}>
    <span className={`gender-${gender.toLowerCase()}`}>{gender}</span>
    {index !== genders.length - 1 && ', '}
  </Fragment>
))

const DeclensionPractice = ({
  practiceQuestion,
  setRandomPracticeQuestion,
  useMacrons,
  practiceMode,
  typeOneHideOthers,
  typeOneField
}) => {
  const [checkedAnswers, setCheckedAnswers] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [attempts, setAttempts] = useState({})

  const [message, setMessage] = useState('')

  const { word, group, type, genders, fields } = practiceQuestion
  const gender = getGendersDisplay(genders)
  const hasVocativeCase = fields.some(field => field.case === 'Vocative')

  useEffect(() => {
    if (practiceMode === 'all-cases') {
      setTimeout(() => {
        const firstInput = document.querySelector('input')
        if (firstInput) {
          firstInput.focus()
        }
      }, 300)
    }
  }, [practiceMode, practiceQuestion])

  useEffect(() => {
    if (checkedAnswers && correct) {
      const nextPracticeButton = document.querySelector('.next-practice')
      if (nextPracticeButton) {
        nextPracticeButton.focus()
      }
    } else if (checkedAnswers && !correct) {
      const tryAgainButton = document.querySelector('.try-again')
      if (tryAgainButton) {
        tryAgainButton.focus()
      }
    }
  }, [checkedAnswers, correct])

  useEffect(() => {
    if (!checkedAnswers && practiceMode === 'one-case') {
      const otherFields = fields.filter(field => (
        field.case !== typeOneField.case || field.number !== typeOneField.number
      ))
      const newAttempts = {}

      for (const field of otherFields) {
        newAttempts[`${field.case.toLowerCase()}${field.number}`] = field.answer
      }

      setAttempts(newAttempts)

      const caseNumberShishkabob = `${typeOneField.case.toLowerCase()}-${typeOneField.number.toLowerCase()}`
      setTimeout(() => {
        const fieldToTypeInput = document.querySelector(`#${caseNumberShishkabob}`)
        if (fieldToTypeInput) {
          fieldToTypeInput.focus()
        }
      }, 300)
    }
  }, [checkedAnswers, fields, practiceMode, typeOneField])

  const isCorrect = (attempt = '', answer) => {
    let sanitizedAttempt = attempt.trim().toLowerCase()
    let sanitizedAnswer = answer.trim().toLowerCase()

    if (!useMacrons) {
      sanitizedAttempt = removeMacrons(sanitizedAttempt)
      sanitizedAnswer = removeMacrons(sanitizedAnswer)
    }

    return sanitizedAttempt === sanitizedAnswer
  }

  const renderDefinition = caseName => {
    const Component = definitionByCase[caseName.toLowerCase()]
    return Component ? <Component /> : caseName
  }

  const getInputClasses = (attempt = '', field) => {
    if (!checkedAnswers) {
      return ''
    }
    if (isCorrect(attempt, field.answer)) {
      return 'bg-green-600 border-green-600 text-white placeholder:text-white'
    }
    return 'bg-destructive border-destructive text-white placeholder:text-white'
  }

  const getCorrectAnswerTextColor = (attempt = '', field) => {
    if (!checkedAnswers) {
      return ''
    }
    if (isCorrect(attempt, field.answer)) {
      return 'text-green-600'
    }
    return 'text-destructive'
  }

  const getCorrectAnswerTextJsx = (attempt = '', field) => {
    const textColor = getCorrectAnswerTextColor(attempt, field)
    return checkedAnswers && !isCorrect(attempt, field.answer) && (
      <p className={cn('mt-1 text-sm', textColor)}>
        Correct answer: {field.answer}&nbsp;
      </p>
    )
  }

  const handleCheckAnswers = () => {
    const checkCorrect = fields.every(field => isCorrect(
      attempts[`${field.case.toLowerCase()}${field.number}`],
      field.answer
    ))

    setCheckedAnswers(true)

    if (checkCorrect) {
      setMessage(messages.correctAnswer)
      setTimeout(() => setMessage(''), 5000)
    }

    setCorrect(checkCorrect)
  }

  const resetState = () => {
    setAttempts({})
    setCheckedAnswers(false)
    setCorrect(false)
    setMessage('')
  }

  const handleNextPractice = () => {
    setRandomPracticeQuestion()
    resetState()
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter' && !checkedAnswers) {
      // Prevent the browser's default Enter handling. Without this, after
      // setCheckedAnswers(true) re-renders and the focus useEffect moves
      // focus to the Try Again / Next Practice button, the same Enter
      // keystroke triggers a click on the newly focused button, which
      // immediately resets state.
      event.preventDefault()
      handleCheckAnswers()
    }
  }

  const handleChange = event => {
    event.persist()
    setAttempts(prevAttempts => ({
      ...prevAttempts,
      [event.target.name]: event.target.value
    }))
  }

  const jsxOfFields = currentFields => currentFields.map((field, index) => {
    const caseLower = field.case.toLowerCase()
    const numberLower = field.number.toLowerCase()
    const caseNumberShishkabob = `${caseLower}-${numberLower}`
    const caseNumberCamel = `${caseLower}${field.number}`
    const typeOneHidden = practiceMode === 'one-case' && typeOneField &&
      typeOneHideOthers &&
      (field.case !== typeOneField.case || field.number !== typeOneField.number) &&
      !checkedAnswers
    const placeholderLabel = 'Enter'
    const gridAreaClass = fieldGridClassMap[caseNumberCamel]

    return (
      <div key={index} className={gridAreaClass}>
        <div className={typeOneHidden ? 'hidden' : 'space-y-1'}>
          <Label
            htmlFor={caseNumberShishkabob}
            className='block text-base font-semibold sm:hidden'
          >
            {renderDefinition(field.case)}
          </Label>
          <Input
            className={getInputClasses(attempts[caseNumberCamel], field)}
            required
            type='text'
            name={caseNumberCamel}
            value={attempts[caseNumberCamel] || ''}
            placeholder={`${placeholderLabel} ${field.case} ${field.number}`}
            onChange={handleChange}
            autoComplete='off'
            id={caseNumberShishkabob}
            onKeyDown={handleKeyDown}
          />
          {getCorrectAnswerTextJsx(attempts[caseNumberCamel], field)}
        </div>
      </div>
    )
  })

  const showNumberLabelCss = number => {
    const hide = practiceMode === 'one-case' && typeOneField && typeOneHideOthers &&
      number !== typeOneField.number && !checkedAnswers
    return hide ? 'hidden' : ''
  }

  const singularFieldsJsx = jsxOfFields(fields.filter(field => field.number === 'Singular'))
  const pluralFieldsJsx = jsxOfFields(fields.filter(field => field.number === 'Plural'))

  const getNotes = () => {
    if (group === '1st') return 'usually feminine ending in -a'
    if (group === '2nd') return 'usually masculine ending in -us/-er or neuter ending in -um'
    if (group === '3rd') return 'largest group of nouns'
    if (group === '4th') return 'predominant letter in the ending forms of this declension is u'
    if (group === '5th') return 'e stems'
    return ''
  }
  const notes = getNotes()

  const labelOrder = hasVocativeCase
    ? ['nominative', 'genitive', 'dative', 'accusative', 'ablative', 'vocative']
    : ['nominative', 'genitive', 'dative', 'accusative', 'ablative']

  return (
    <Fragment>
      <h3 className='text-2xl font-semibold'>{word}</h3>
      <h6 className='text-sm text-muted-foreground'>
        {group} {type} {checkedAnswers && <Fragment>({notes})</Fragment>}
      </h6>
      <h6 className='text-sm'>{gender}</h6>
      <div
        className={cn(
          styles.gridContainer,
          'mt-4',
          hasVocativeCase && styles.gridContainerVocative
        )}
      >
        {labelOrder.map(caseName => {
          const Component = definitionByCase[caseName]
          return (
            <div
              key={caseName}
              className={cn(
                labelGridClassMap[caseName],
                'hidden text-right sm:flex sm:items-center sm:justify-end'
              )}
            >
              <Component />
            </div>
          )
        })}

        <div className={cn(styles.singularTitle, 'flex items-center justify-center')}>
          <h5 className={cn('text-lg font-semibold', showNumberLabelCss('Singular'))}>
            Singular
          </h5>
        </div>
        {singularFieldsJsx}

        <div className={cn(styles.pluralTitle, 'flex items-center justify-center')}>
          <h5 className={cn('text-lg font-semibold', showNumberLabelCss('Plural'))}>
            Plural
          </h5>
        </div>
        {pluralFieldsJsx}

        <div className={styles.leftButton}>
          {checkedAnswers && !correct && (
            <Button
              onClick={resetState}
              variant='secondary'
              className='try-again mb-2 w-full'
            >
              Try Again
            </Button>
          )}
        </div>

        <div className={styles.rightButton}>
          {!checkedAnswers && (
            <Button onClick={handleCheckAnswers} className='w-full'>
              Check Answers
            </Button>
          )}
          {checkedAnswers && (
            <Button
              onClick={handleNextPractice}
              className='next-practice mb-2 w-full'
            >
              Next Practice
            </Button>
          )}
        </div>
      </div>
      <h6 className='mt-2 text-center text-sm'>{message}</h6>
    </Fragment>
  )
}

export default DeclensionPractice
