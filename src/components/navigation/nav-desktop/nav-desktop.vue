<template lang='pug' src='./nav-desktop.pug'></template>

<script>
import Icon from 'components/icon/icon'
import { openModal } from '@/methods'

export default {
  computed: {
    props () {
      return this.$store.state.app.information
    }
  },
  components: {
    Icon
  },
  mixins: [ openModal ],
  methods: {
    toggleMenu () {
      this.$store.state.menu ? this.$store.dispatch('VIEW_MENU', false) : this.$store.dispatch('VIEW_MENU', true)
    }
  }
}
</script>
