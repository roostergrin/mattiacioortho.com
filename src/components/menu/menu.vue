<template lang='pug' src='./menu.pug'></template>

<script>
import Icon from 'components/icon/icon'

export default {
  data () {
    return {
      styleWidth: window.innerWidth,
      styleHeight: window.innerHeight,
      covid: false,
      virtualServices: false
    }
  },
  computed: {
    links () {
      return this.$router.options.routes
    },
    props () {
      return this.$store.state.app.information
    },
    classList () {
      return {
        'active': this.$store.state.menu
      }
    },
    styleObject () {
      return {
        width: (this.styleWidth / 3.5) + 'px',
        height: (this.styleHeight / 3.5) + 'px'
      }
    }
  },
  mounted () {
    window.addEventListener('resize', this.myEventHandler)
  },
  components: {
    Icon
  },
  methods: {
    closeMenu (e) {
      let options = { offset: -90 }
      this.$store.state.menu ? this.$store.dispatch('VIEW_MENU', false) : this.$store.dispatch('VIEW_MENU', true)
      document.body.classList.remove('body-stop')
      this.$router.push(e.path)
      // wait for animation to finish before scrolling to element
      setTimeout(() => { this.$scrollTo(e.target, options) }, 1300)
    },
    myEventHandler (e) {
      this.styleWidth = e.target.innerWidth
      this.styleHeight = e.target.innerHeight
    },
    makeAppt () {
      this.$router.push('/contact-us#form')
    }
  }
}

</script>
