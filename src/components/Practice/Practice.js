import React, { useEffect, useState } from 'react'

import DeclensionPractice from '../DeclensionPractice/DeclensionPractice'
import { removeElementAtRandom } from '../../utils'
import { useAppContext } from '../../context/AppContext'

const Practice = () => {
  const {
    chooseRandomPracticeQuestion,
    useMacrons,
    practiceMode,
    typeOneHideOthers,
    practiceType,
    shouldPlayAudio
  } = useAppContext()
  const [practiceQuestion, setPracticeQuestion] = useState(null)
  const [typeOneField, setTypeOneField] = useState(null)

  const setRandomPracticeQuestion = () => {
    const randomPractice = chooseRandomPracticeQuestion('Declension')

    if (!randomPractice) {
      setPracticeQuestion(null)
      setTypeOneField(null)
      return
    }

    setPracticeQuestion(randomPractice)
    const fieldsCopy = [...randomPractice.fields]
    const fieldToType = removeElementAtRandom(fieldsCopy)
    setTypeOneField(fieldToType)
  }

  useEffect(() => {
    setRandomPracticeQuestion()
  }, [chooseRandomPracticeQuestion])

  let practiceTypeJsx
  if (practiceQuestion === null || typeOneField === null) {
    practiceTypeJsx = <h3>Loading...</h3>
  } else if (practiceQuestion.type === 'Declension') {
    practiceTypeJsx = (
      <DeclensionPractice
        practiceQuestion={practiceQuestion}
        setRandomPracticeQuestion={setRandomPracticeQuestion}
        useMacrons={useMacrons}
        practiceMode={practiceMode}
        typeOneHideOthers={typeOneHideOthers}
        typeOneField={typeOneField}
        practiceType={practiceType}
        shouldPlayAudio={shouldPlayAudio}
      />
    )
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        {practiceTypeJsx}
      </div>
    </div>
  )
}

export default Practice
