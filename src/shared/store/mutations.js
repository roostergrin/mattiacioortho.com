import { GET_PAGES, GET_APP, VIEW_NAV, VIEW_BODY, VIEW_TYPES, VIEW_SHOWMODAL, VIEW_MODALCONTENT, VIEW_MENU, VIEW_VIDEO, VIEW_THANKS, VIEW_TABS, VIEW_EVENT, LOADING } from './mutation-types.js'

const mutations = {
  [GET_PAGES] (state, data) {
    state.pages = data
    state.loading = false
  },
  // [GET_BLOG] (state, data) {
  //   state.blog = data
  //   state.blog.current_page = {}
  //   state.blog.current_page.number = 1
  //   state.loading = false
  // },
  [LOADING] (state, data) {
    state.loading = data
  },
  [GET_APP] (state, data) {
    state.app = data
  },
  [VIEW_NAV] (state, data) {
    state.nav = data
  },
  [VIEW_BODY] (state, data) {
    state.body = data
  },
  [VIEW_TYPES] (state, data) {
    state.types = data
  },
  [VIEW_SHOWMODAL] (state, data) {
    state.showModal = data
  },
  [VIEW_MODALCONTENT] (state, data) {
    state.modalContent = data
  },
  [VIEW_MENU] (state, data) {
    state.menu = data
  },
  [VIEW_VIDEO] (state, data) {
    state.video = data
  },
  [VIEW_THANKS] (state, data) {
    state.thanks = data
  },
  [VIEW_TABS] (state, data) {
    state.tabs = data
  },
  [VIEW_EVENT] (state, data) {
    state.funEvent = data
  }
}

export default mutations
