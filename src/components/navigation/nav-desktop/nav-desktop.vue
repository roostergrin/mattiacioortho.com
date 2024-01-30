<template lang='pug' src='./nav-desktop.pug'></template>

<script>
import Icon from 'components/icon/icon'
import { openModal } from '@/methods'
import Bottom from '../nav-bottom/nav-bottom'

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
    Icon,
    Bottom
  },
  mixins: [ openModal ],
  methods: {
    toggleMenu () {
      let menuOpen = this.$store.state.menu
      let menuClosed = !this.$store.state.menu

      if (menuOpen) {
        this.$store.dispatch('VIEW_MENU', false)
        document.body.classList.remove('body-stop')
        if (document.getElementsByClassName('header--thank-you').length > 0) {
          document.getElementsByClassName('header--thank-you')[0].classList.remove('menuaddthank')
        }
      }
      if (menuOpen) {
        this.$store.dispatch('VIEW_MENU', false)
        document.body.classList.remove('body-stop')
        if (document.getElementsByClassName('header--exit-interview').length > 0) {
          document.getElementsByClassName('header--exit-interview')[0].classList.remove('menuaddinterview')
        }
      }
      if (menuOpen) {
        this.$store.dispatch('VIEW_MENU', false)
        document.body.classList.remove('body-stop')
        if (document.getElementsByClassName('header--smile-assurance').length > 0) {
          document.getElementsByClassName('header--smile-assurance')[0].classList.remove('menuaddsmileassurance')
        }
      }
      if (menuOpen) {
        this.$store.dispatch('VIEW_MENU', false)
        document.body.classList.remove('body-stop')
        if (document.getElementsByClassName('header--retainer-program').length > 0) {
          document.getElementsByClassName('header--retainer-program')[0].classList.remove('menuaddprogram')
        }
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
        if (document.getElementsByClassName('header--thank-you').length > 0) {
          document.getElementsByClassName('header--thank-you')[0].classList.add('menuaddthank')
        }
      }
      if (menuClosed && !this.$store.state.nav) {
        this.$store.dispatch('VIEW_MENU', true)
        document.body.classList.add('body-stop')
        if (document.getElementsByClassName('header--exit-interview').length > 0) {
          document.getElementsByClassName('header--exit-interview')[0].classList.add('menuaddinterview')
        }
      }
      if (menuClosed && !this.$store.state.nav) {
        this.$store.dispatch('VIEW_MENU', true)
        document.body.classList.add('body-stop')
        if (document.getElementsByClassName('header--smile-assurance').length > 0) {
          document.getElementsByClassName('header--smile-assurance')[0].classList.add('menuaddsmileassurance')
        }
      }
      if (menuClosed && !this.$store.state.nav) {
        this.$store.dispatch('VIEW_MENU', true)
        document.body.classList.add('body-stop')
        if (document.getElementsByClassName('header--retainer-program').length > 0) {
          document.getElementsByClassName('header--retainer-program')[0].classList.add('menuaddprogram')
        }
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
