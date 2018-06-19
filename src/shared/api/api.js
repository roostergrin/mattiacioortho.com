const route = '//mattiacioortho.com/wp-json'

const api = () => {
  return document.location.hostname === 'localhost' ? route : document.location.protocol + '/wp-json'
}

export default api()
