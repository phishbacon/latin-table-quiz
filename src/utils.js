// https://stackoverflow.com/a/37511463/3500171
export const removeMacrons = word => word.normalize('NFD').replace(/[̀-ͯ]/g, '')
export const loadBooleanOption = (name, defaultValue) => {
  if (typeof window === 'undefined') {
    return defaultValue
  }

  return (window.localStorage.getItem(name) || `${defaultValue}`) === 'true'
}
export const saveBooleanOption = (name, value) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(name, `${value}`)
  }
}
export const removeElementAtRandom = array => {
  const randomIndex = Math.floor(Math.random() * array.length)
  const removedElement = array.splice(randomIndex, 1)
  return removedElement[0]
}
