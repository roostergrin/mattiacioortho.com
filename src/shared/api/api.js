const route = '//api.roostertest3.com/wp-json'

const api = () => {
  return document.location.hostname === 'localhost' || document.location.href.indexOf('something') > -1 ? route : document.location.protocol + '/wp-json'
}

export default api()
