import axios from 'axios'
import api from 'api'
import {
  GET_PAGES,
  // GET_BLOG,
  GET_APP,
  VIEW_NAV,
  VIEW_BODY,
  VIEW_TYPES,
  VIEW_SHOWMODAL,
  VIEW_MODALCONTENT,
  VIEW_MENU,
  VIEW_VIDEO,
  VIEW_THANKS,
  VIEW_TABS,
  LOADING
} from './mutation-types'

const actions = {
  GET_PAGES ({ commit }) {
    (async () => {
      try {
        const response = await axios.get(`${api}/wp/v2/pages?per_page=100`)
        const data = response.data.reduce(
          (allData, data) => ({ ...allData, [data.slug]: data }),
          {}
        )
        commit(GET_PAGES, data)
      } catch (e) {
        console.log('PAGES API: ' + e)
      }
    })()
  },
  GET_APP ({ commit }) {
    (async () => {
      try {
        const response = await axios.get(`${api}/wp/v2/app`)
        const data = response.data.reduce(
          (allData, data) => ({ ...allData, [data.slug]: data }),
          {}
        )
        commit(GET_APP, data)
      } catch (e) { console.log('APP API: ' + e) }
    })()
  },
  // GET_BLOG ({ commit }) {
  //   (async () => {
  //     try {
  //       const response = await axios.get(`${api}/wp/v2/posts?per_page=10&_embed`)
  //       commit(GET_BLOG, response)
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   })()
  // },
  LOADING ({ commit }, data) {
    commit(LOADING, data)
  },
  VIEW_NAV ({ commit }, data) {
    commit(VIEW_NAV, data)
  },
  VIEW_BODY ({ commit }, data) {
    commit(VIEW_BODY, data)
  },
  VIEW_TYPES ({ commit }, data) {
    commit(VIEW_TYPES, data)
  },
  VIEW_SHOWMODAL ({ commit }, data) {
    commit(VIEW_SHOWMODAL, data)
  },
  VIEW_MODALCONTENT ({ commit }, data) {
    commit(VIEW_MODALCONTENT, data)
  },
  VIEW_MENU ({ commit }, data) {
    commit(VIEW_MENU, data)
  },
  VIEW_VIDEO ({ commit }, data) {
    commit(VIEW_VIDEO, data)
  },
  VIEW_THANKS ({ commit }, data) {
    commit(VIEW_THANKS, data)
  },
  VIEW_TABS ({ commit }, data) {
    commit(VIEW_TABS, data)
  }
}

export default actions
