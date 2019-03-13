<template lang='pug' src='./nav-desktop.pug'></template>

<script>
import Icon from 'components/icon/icon'
import { openModal } from '@/methods'

export default {
  data () {
    return {
      open: false
    }
  },
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
      let menuOpen = this.$store.state.menu
      let menuClosed = !this.$store.state.menu

      if (menuOpen) {
        this.$store.dispatch('VIEW_MENU', false)
        document.body.classList.remove('body-stop')
      }
      // if menu is closed and not at the top of the pg - scroll to top
      if (menuClosed && this.$store.state.nav) {
        setTimeout(() => {
          this.$store.dispatch('VIEW_MENU', true)
          document.body.classList.add('body-stop')
        }, 750)
      }
      if (menuClosed && !this.$store.state.nav) {
        this.$store.dispatch('VIEW_MENU', true)
        document.body.classList.add('body-stop')
      }
    },
    closeMenu () {
      if (this.$store.state.menu) {
        this.$store.dispatch('VIEW_MENU', false)
        document.body.classList.remove('body-stop')
        this.$router.push('/')
      }
      // scroll to top before fade
      if (!this.$store.state.menu) {
        setTimeout(() => { this.$router.push('/') }, 750)
      }
    },
    dropdown () {
      this.open = !this.open
    }
  }
}
</script>
