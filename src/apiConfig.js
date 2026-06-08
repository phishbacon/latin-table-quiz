const apiUrl = process.env.NODE_ENV === 'production'
  ? 'https://aqueous-atoll-85096.herokuapp.com'
  : 'http://localhost:4741'

export default apiUrl
