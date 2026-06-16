import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { knuthShuffle as shuffle } from 'knuth-shuffle'

import practiceQuestionsData from '../data/practiceQuestions'

const AppContext = createContext(null)

const BOOLEAN_OPTIONS = {
  useMacrons: true,
  typeOneHideOthers: true
}

const STRING_OPTIONS = {
  practiceMode: 'all-cases',
  practiceType: 'type'
}

const readBooleanOption = (name, fallback) => {
  if (typeof window === 'undefined') {
    return fallback
  }

  const value = window.localStorage.getItem(name)
  return value === null ? fallback : value === 'true'
}

const readStringOption = (name, fallback) => {
  if (typeof window === 'undefined') {
    return fallback
  }

  return window.localStorage.getItem(name) || fallback
}

const readJsonOption = (name, fallback) => {
  if (typeof window === 'undefined') {
    return fallback
  }

  try {
    return JSON.parse(window.localStorage.getItem(name) || JSON.stringify(fallback))
  } catch (error) {
    return fallback
  }
}

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])
  const practiceQuestionsRef = useRef(null)
  if (practiceQuestionsRef.current === null) {
    practiceQuestionsRef.current = shuffle([...practiceQuestionsData])
  }
  const [useMacrons, setUseMacronsState] = useState(BOOLEAN_OPTIONS.useMacrons)
  const [practiceMode, setPracticeModeState] = useState(STRING_OPTIONS.practiceMode)
  const [typeOneHideOthers, setTypeOneHideOthersState] = useState(BOOLEAN_OPTIONS.typeOneHideOthers)
  const [practiceType, setPracticeTypeState] = useState(STRING_OPTIONS.practiceType)
  const [enabledDeclensions, setEnabledDeclensionsState] = useState([])

  useEffect(() => {
    setUseMacronsState(readBooleanOption('useMacrons', BOOLEAN_OPTIONS.useMacrons))
    setPracticeModeState(readStringOption('practiceMode', STRING_OPTIONS.practiceMode))
    setTypeOneHideOthersState(readBooleanOption('typeOneHideOthers', BOOLEAN_OPTIONS.typeOneHideOthers))
    setPracticeTypeState(readStringOption('practiceType', STRING_OPTIONS.practiceType))
    setEnabledDeclensionsState(readJsonOption('enabledDeclensions', []))
  }, [])

  const clearUser = useCallback(() => setUser(null), [])

  const setUseMacrons = useCallback((value) => {
    setUseMacronsState(value)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('useMacrons', `${value}`)
    }
  }, [])

  const setPracticeMode = useCallback((value) => {
    setPracticeModeState(value)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('practiceMode', value)
    }
  }, [])

  const setTypeOneHideOthers = useCallback((value) => {
    setTypeOneHideOthersState(value)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('typeOneHideOthers', `${value}`)
    }
  }, [])

  const setPracticeType = useCallback((value) => {
    setPracticeTypeState(value)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('practiceType', value)
    }
  }, [])

  const setEnabledDeclensions = useCallback((value) => {
    setEnabledDeclensionsState(value)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('enabledDeclensions', JSON.stringify(value))
    }
  }, [])

  const deleteAlert = useCallback((id) => {
    setMsgAlerts((currentAlerts) => currentAlerts.filter((msg) => msg.id !== id))
  }, [])

  const msgAlert = useCallback(({ heading, message, variant }) => {
    setMsgAlerts((currentAlerts) => [...currentAlerts, { heading, message, variant, id: uuid() }])
  }, [])

  const chooseRandomPracticeQuestion = useCallback((questionType) => {
    const declensions = enabledDeclensions.length > 0 ? enabledDeclensions : ['1st']
    const questions = practiceQuestionsRef.current
    const filteredQuestions = questions.filter((question) => (
      question.type === questionType && declensions.includes(question.group)
    ))

    if (filteredQuestions.length === 0) {
      return undefined
    }

    const randomQuestion = filteredQuestions[0]
    const randomQuestionIndex = questions.findIndex((question) => question === randomQuestion)

    // Move chosen question to the end of the queue so we cycle through all of them
    questions.splice(randomQuestionIndex, 1)
    questions.push(randomQuestion)

    return randomQuestion
  }, [enabledDeclensions])

  const value = useMemo(() => ({
    user,
    msgAlerts,
    useMacrons,
    practiceMode,
    typeOneHideOthers,
    practiceType,
    enabledDeclensions,
    setUser,
    clearUser,
    setUseMacrons,
    setPracticeMode,
    setTypeOneHideOthers,
    setPracticeType,
    setEnabledDeclensions,
    msgAlert,
    deleteAlert,
    chooseRandomPracticeQuestion
  }), [
    user,
    msgAlerts,
    useMacrons,
    practiceMode,
    typeOneHideOthers,
    practiceType,
    enabledDeclensions,
    clearUser,
    setUseMacrons,
    setPracticeMode,
    setTypeOneHideOthers,
    setPracticeType,
    setEnabledDeclensions,
    msgAlert,
    deleteAlert,
    chooseRandomPracticeQuestion
  ])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }

  return context
}
