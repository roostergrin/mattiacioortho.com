<template lang='pug' src='./app.pug'></template>

<script>
// components
import EventModal from 'components/modal/event-modal/event-modal'
import Footer from 'components/footer/footer'
import Header from 'components/header/header'
import Loader from 'components/loader/loader'
import Modal from 'components/modal/modal'
import Navigation from 'components/navigation/navigation'
import Thanks from 'components/modal/modal-thanks/modal-thanks'
import BaseBaseAccess from 'components/base-access/index'

export default {
  created () {
    this.$store.dispatch('GET_PAGES')
    this.$store.dispatch('GET_APP')
    this.$store.dispatch('VIEW_BODY', false)
    this.$store.dispatch('VIEW_MENU', false)
    // this.$store.dispatch('VIEW_MODALCONTENT', false)
    this.$store.dispatch('VIEW_NAV', false)
    this.$store.dispatch('VIEW_SHOWMODAL', false)
    this.$store.dispatch('VIEW_TABS', 0)
    this.$store.dispatch('VIEW_THANKS', false)
    this.$store.dispatch('VIEW_TYPES', 0)
    this.$store.dispatch('VIEW_VIDEO', false)
    this.$store.dispatch('VIEW_EVENT', false)
    this.$store.dispatch('LOADING', true)
  },
  computed: {
    props () {
      return this.$store.state
    }
  },
  components: {
    EventModal,
    Footer,
    Header,
    Loader,
    Modal,
    Navigation,
    Thanks,
    BaseBaseAccess
  },
  name: 'app'
}
</script>

<-- styles have been moved to main.sass file -->
<style src='../main.sass' lang='sass'></style>
