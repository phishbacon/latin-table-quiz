import React, { Fragment, useState, useEffect } from 'react'
import useSound from 'use-sound'
import { removeMacrons } from '../../utils'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import messages from '../AutoDismissAlert/messages'
import NominativeDefinition from '../definitions/NominativeDefinition/NominativeDefinition'
import GenitiveDefinition from '../definitions/GenitiveDefinition/GenitiveDefinition'
import AccusativeDefinition from '../definitions/AccusativeDefinition/AccusativeDefinition'
import DativeDefinition from '../definitions/DativeDefinition/DativeDefinition'
import AblativeDefinition from '../definitions/AblativeDefinition/AblativeDefinition'
import VocativeDefinition from '../definitions/VocativeDefinition/VocativeDefinition'

const getGendersDipslay = genders => genders.map((gender, index) => (
  <Fragment key={index}>
    <span className={gender.toLowerCase()}>{gender}</span>{index !== genders.length - 1 && ', '}
  </Fragment>
))

const onlyVisibleOnXs = 'd-block d-sm-none'
const hiddenOnXs = 'd-none d-sm-block'

const DeclensionPractice = ({ practiceQuestion, setRandomPracticeQuestion,
  useMacrons, practiceMode, practiceType, typeOneHideOthers, typeOneField, shouldPlayAudio }) => {
  const [checkedAnswers, setCheckedAnswers] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [attempts, setAttempts] = useState({})
  const audioUrl = practiceMode === 'one-case' && typeOneField.audioUrl ? typeOneField.audioUrl : practiceQuestion.audioUrl
  const [playAudio, { stop: stopAudio }] = useSound(audioUrl)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const useAudioFieldUrlToPlay = () => {
    const audioFieldUrlToPlay = {}
    const urlToFieldsArrays = practiceQuestion.fields.map((field) => ([field.audioUrl, useSound(field.audioUrl)[0]]))
    urlToFieldsArrays.forEach(([fieldAudioUrl, play]) => {
      audioFieldUrlToPlay[fieldAudioUrl] = play
    })
    if (practiceQuestion.fields.length === 10) {
      useSound(audioUrl)
    }
    return audioFieldUrlToPlay
  }
  const audioFieldUrlToPlay = useAudioFieldUrlToPlay()

  const [message, setMessage] = useState('')

  const { word, group, type, genders, fields } = practiceQuestion
  const gender = getGendersDipslay(genders)
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
      const otherFields = fields.filter(field => field.case !== typeOneField.case || field.number !== typeOneField.number)
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

  useEffect(() => () => {
    stopAudio()
  }, [stopAudio])

  const isCorrect = (attempt = '', answer) => {
    let sanitizedAttempt = attempt.trim().toLowerCase()
    let sanitizedAnswer = answer.trim().toLowerCase()

    if (!useMacrons) {
      sanitizedAttempt = removeMacrons(sanitizedAttempt)
      sanitizedAnswer = removeMacrons(sanitizedAnswer)
    }

    return sanitizedAttempt === sanitizedAnswer
  }

  const getLabelJsx = label => {
    if (label.toLowerCase() === 'nominative') {
      return <NominativeDefinition />
    } else if (label.toLowerCase() === 'genitive') {
      return <GenitiveDefinition />
    } else if (label.toLowerCase() === 'accusative') {
      return <AccusativeDefinition />
    } else if (label.toLowerCase() === 'dative') {
      return <DativeDefinition />
    } else if (label.toLowerCase() === 'ablative') {
      return <AblativeDefinition />
    } else if (label.toLowerCase() === 'vocative') {
      return <VocativeDefinition />
    }

    return label
  }

  const getInputBg = (attempt = '', field) => {
    if (!checkedAnswers) {
      return ''
    } else if (practiceType === 'speak' && (practiceMode === 'all-cases' || (typeOneField.case === field.case && typeOneField.number === field.number))) {
      return 'bg-secondary text-white placeholder-white'
    } else if (isCorrect(attempt, field.answer)) {
      return 'bg-success text-white placeholder-white'
    }

    return 'bg-danger text-white placeholder-white'
  }

  const getCorrectAnswerTextColor = (attempt = '', field) => {
    if (!checkedAnswers) {
      return ''
    } else if (practiceType === 'speak' && (practiceMode === 'all-cases' || (typeOneField.case === field.case && typeOneField.number === field.number))) {
      return 'text-secondary'
    } else if (isCorrect(attempt, field.answer)) {
      return 'text-success'
    }

    return 'text-danger'
  }

  const getCorrectAnswerTextJsx = (attempt = '', field) => {
    const textColor = getCorrectAnswerTextColor(attempt, field)
    /* TODO Re-enable after re-recording audio */
    // const handlePlayButton = () => {
    //   stopAudio()
    //   audioFieldUrlToPlay[field.audioUrl]()
    // }
    return checkedAnswers && (!isCorrect(attempt, field.answer) || practiceType === 'speak') && (
      <Form.Text className={`${textColor} answer-text`}>
        Correct answer: {field.answer}&nbsp;
        {/* TODO Re-enable after re-recording audio */}
        {/* <span className='play-button' onClick={handlePlayButton}>
          ▶️
        </span> */}
      </Form.Text>
    )
  }

  const handleCheckAnswers = () => {
    const checkCorrect = fields.every(field => isCorrect(attempts[`${field.case.toLowerCase()}${field.number}`], field.answer))

    setCheckedAnswers(true)

    if (checkCorrect) {
      setMessage(messages.correctAnswer)
      setTimeout(() => setMessage(''), 5000)
    }

    if (shouldPlayAudio) {
      playAudio()
    }

    setCorrect(checkCorrect)
  }

  const resetState = () => {
    stopAudio()
    setAttempts({})
    setCheckedAnswers(false)
    setCorrect(false)
    setMessage('')
  }

  const handleNextPractice = () => {
    setRandomPracticeQuestion()
    resetState()
  }

  const handleChange = event => {
    event.persist()
    setAttempts(prevAttempts => ({ ...prevAttempts, [event.target.name]: event.target.value }))
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter' && !checkedAnswers) {
      handleCheckAnswers()
    }
  }

  const jsxOfFields = currentFields => currentFields.map((field, index) => {
    const caseNumberShishkabob = `${field.case.toLowerCase()}-${field.number.toLowerCase()}`
    const caseNumberCamel = `${field.case.toLowerCase()}${field.number}`
    const typeOneHidden = practiceMode === 'one-case' && typeOneField && typeOneHideOthers && (field.case !== typeOneField.case || field.number !== typeOneField.number) && !checkedAnswers
    const typeOneHiddenClass = typeOneHidden ? 'd-none' : ''
    const placeholderLabel = practiceType === 'type' ? 'Enter' : 'Say'
    const disabled = practiceType === 'speak'
    return (
      <div key={index} className={caseNumberShishkabob}>
        <Form.Group className={typeOneHiddenClass}>
          <Form.Label className={onlyVisibleOnXs}><h5>{getLabelJsx(field.case)}</h5></Form.Label>
          <Form.Control
            className={getInputBg(attempts[caseNumberCamel], field)}
            required
            type='text'
            name={caseNumberCamel}
            value={attempts[caseNumberCamel] || ''}
            placeholder={`${placeholderLabel} ${field.case} ${field.number}`}
            onChange={handleChange}
            autoComplete='off'
            id={caseNumberShishkabob}
            onKeyDown={handleKeyDown}
            disabled={disabled}
          />
          {getCorrectAnswerTextJsx(attempts[`${field.case.trim().toLowerCase()}${field.number}`], field)}
        </Form.Group>
      </div>
    )
  })

  const showNumberLabelCss = (number) => {
    const hide = practiceMode === 'one-case' && typeOneField && typeOneHideOthers && number !== typeOneField.number && !checkedAnswers
    return hide ? 'd-none' : ''
  }
  const singularFieldsJsx = jsxOfFields(fields.filter(field => field.number === 'Singular'))
  const pluralFieldsJsx = jsxOfFields(fields.filter(field => field.number === 'Plural'))
  const getNotes = () => {
    let questionNotes = ''

    if (group === '1st') {
      questionNotes += 'usually feminine ending in -a'
    } else if (group === '2nd') {
      questionNotes += 'usually masculine ending in -us/-er or neuter ending in -um'
    } else if (group === '3rd') {
      questionNotes += 'largest group of nouns'
    } else if (group === '4th') {
      questionNotes += 'predominant letter in the ending forms of this declension is u'
    } else if (group === '5th') {
      questionNotes += 'e stems'
    }

    return questionNotes
  }
  const notes = getNotes()

  return (
    <Fragment>
      <h3>{word}</h3>
      <h6>{group} {type} {checkedAnswers && <Fragment>({notes})</Fragment>}</h6>
      <h6>{gender}</h6>
      <div className={`grid-container mt-4 ${hasVocativeCase ? 'grid-container-vocative' : ''}`}>
        <div className={`nominative-label ${hiddenOnXs}`}><h5 className='text-right'><NominativeDefinition /></h5></div>
        <div className={`genitive-label ${hiddenOnXs}`}><h5 className='text-right'><GenitiveDefinition /></h5></div>
        <div className={`dative-label ${hiddenOnXs}`}><h5 className='text-right'><DativeDefinition /></h5></div>
        <div className={`ablative-label ${hiddenOnXs}`}><h5 className='text-right'><AblativeDefinition /></h5></div>
        <div className={`vocative-label ${hasVocativeCase ? hiddenOnXs : 'd-none'}`}><h5 className='text-right'><VocativeDefinition /></h5></div>
        <div className={`accusative-label ${hiddenOnXs}`}><h5 className='text-right'><AccusativeDefinition /></h5></div>

        <div className='singular-title text-center'><h5 className={showNumberLabelCss('Singular')}>Singular</h5></div>
        {singularFieldsJsx}

        <div className='plural-title text-center'><h5 className={showNumberLabelCss('Plural')}>Plural</h5></div>
        {pluralFieldsJsx}

        <div className='left-button'>
          {checkedAnswers && !correct && (
            <Button onClick={resetState} variant='secondary' className='btn-block try-again text-white mb-2'>
              Try Again
            </Button>
          )}
        </div>

        <div className='right-button'>
          {!checkedAnswers && (
            <Button onClick={handleCheckAnswers} variant='primary' className='btn-block'>
              Check Answers
            </Button>
          )}
          {checkedAnswers && (
            <Button onClick={handleNextPractice} variant='primary' className='btn-block next-practice mb-2'>
              Next Practice
            </Button>
          )}
        </div>
      </div>
      <h6 className='text-center mt-2'>{message}</h6>
    </Fragment>
  )
}

export default DeclensionPractice
