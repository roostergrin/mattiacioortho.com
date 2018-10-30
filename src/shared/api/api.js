const route = 'https://mattiacioortho.com/wp-json'

const api = () => {
  return route
  // return document.location.hostname === 'localhost' ? route : document.location.protocol + '/wp-json'
}

export default api()
