<template lang='pug' src='./app.pug'></template>

<script>
// components
import Footer from 'components/footer/footer'
import Header from 'components/header/header'
import Modal from 'components/modal/modal'
import Navigation from 'components/navigation/navigation'
import Revisions from 'revisions'

export default {
  created () {
    this.$store.dispatch('GET_PAGES')
    this.$store.dispatch('GET_APP')
    this.$store.dispatch('VIEW_NAV', false)
    this.$store.dispatch('VIEW_BODY', false)
    this.$store.dispatch('VIEW_TYPES', 0)
    this.$store.dispatch('VIEW_SHOWMODAL', false)
    this.$store.dispatch('VIEW_MODALCONTENT', false)
    this.$store.dispatch('VIEW_MENU', false)
    this.$store.dispatch('VIEW_VIDEO', false)
    this.$store.dispatch('VIEW_THANKS', false)
  },
  computed: {
    props () {
      return this.$store.state
    }
  },
  components: {
    Footer,
    Header,
    Modal,
    Navigation,
    Revisions
  },
  name: 'app'
}
</script>

<-- styles have been moved to main.sass file -->
<style src='../main.sass' lang='sass'></style>
