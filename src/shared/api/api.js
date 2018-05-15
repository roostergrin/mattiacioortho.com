const route = '//mattiacioortho.roostertest.com/wp-json'

const api = () => {
  return document.location.hostname === 'localhost' || document.location.href.indexOf('roostertest') > -1 ? route : document.location.protocol + '/wp-json'
}

export default api()
