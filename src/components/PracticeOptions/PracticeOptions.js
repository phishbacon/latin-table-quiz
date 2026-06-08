import React from 'react'
import { useRouter } from 'next/router'

import { useAppContext } from '../../context/AppContext'
import messages from '../AutoDismissAlert/messages'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const PracticeOptions = () => {
  const router = useRouter()
  const {
    msgAlert,
    useMacrons,
    setUseMacrons,
    setPracticeMode,
    practiceMode,
    setPracticeType,
    practiceType,
    typeOneHideOthers,
    setTypeOneHideOthers,
    enabledDeclensions,
    setEnabledDeclensions
  } = useAppContext()

  const onStartPractice = event => {
    event.preventDefault()

    router.push('/practice')
    msgAlert({
      heading: 'Starting Practice',
      message: messages.startPracticeSuccess,
      variant: 'success'
    })
  }

  const declensions = ['1st', '2nd', '3rd', '4th', '5th']
  const toggleDeclension = (declension) => {
    if (enabledDeclensions.includes(declension)) {
      setEnabledDeclensions(enabledDeclensions.filter(d => d !== declension))
    } else {
      setEnabledDeclensions([...enabledDeclensions, declension])
    }
  }

  return (
    <div className='mx-auto mt-10 max-w-2xl space-y-6'>
      <header className='space-y-1'>
        <h3 className='text-2xl font-semibold tracking-tight'>Practice</h3>
        <h4 className='text-lg text-muted-foreground'>Options</h4>
      </header>

      <form onSubmit={onStartPractice} className='space-y-6'>
        <div className='flex items-center gap-2'>
          <Checkbox
            id='use-macrons'
            checked={useMacrons}
            onCheckedChange={checked => setUseMacrons(Boolean(checked))}
          />
          <Label htmlFor='use-macrons'>Use Macrons</Label>
        </div>

        <fieldset className='space-y-3'>
          <legend className='text-base font-semibold'>Type</legend>
          <RadioGroup
            value={practiceType}
            onValueChange={setPracticeType}
            className='flex flex-wrap gap-x-6 gap-y-2'
          >
            <div className='flex items-center gap-2'>
              <RadioGroupItem id='type-type' value='type' />
              <Label htmlFor='type-type'>Type Cases</Label>
            </div>
            <div className='flex items-center gap-2'>
              <RadioGroupItem id='type-speak' value='speak' />
              <Label htmlFor='type-speak'>Say Cases</Label>
            </div>
          </RadioGroup>
        </fieldset>

        <fieldset className='space-y-3'>
          <legend className='text-base font-semibold'>Declensions</legend>
          <div className='flex flex-wrap gap-x-6 gap-y-2'>
            {declensions.map(declension => {
              const id = `declension-${declension}`
              return (
                <div key={declension} className='flex items-center gap-2'>
                  <Checkbox
                    id={id}
                    checked={enabledDeclensions.includes(declension)}
                    onCheckedChange={() => toggleDeclension(declension)}
                  />
                  <Label htmlFor={id}>{`${declension} Declension`}</Label>
                </div>
              )
            })}
          </div>
        </fieldset>

        <fieldset className='space-y-3'>
          <legend className='text-base font-semibold'>Mode</legend>
          <RadioGroup
            value={practiceMode}
            onValueChange={setPracticeMode}
            className='space-y-2'
          >
            <div className='flex flex-wrap items-center gap-x-6 gap-y-2'>
              <div className='flex items-center gap-2'>
                <RadioGroupItem id='mode-one-case' value='one-case' />
                <Label htmlFor='mode-one-case'>1 Case at Random</Label>
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox
                  id='hide-other-cases'
                  checked={typeOneHideOthers}
                  onCheckedChange={checked => setTypeOneHideOthers(Boolean(checked))}
                  disabled={practiceMode !== 'one-case'}
                />
                <Label htmlFor='hide-other-cases' className={practiceMode !== 'one-case' ? 'text-muted-foreground' : ''}>
                  Hide Other Cases
                </Label>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <RadioGroupItem id='mode-all-cases' value='all-cases' />
              <Label htmlFor='mode-all-cases'>All Cases</Label>
            </div>
          </RadioGroup>
        </fieldset>

        <Button type='submit'>Start Practice</Button>
      </form>
    </div>
  )
}

export default PracticeOptions
