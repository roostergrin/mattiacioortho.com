<template lang='pug' src='./menu.pug'></template>

<script>
import Icon from 'components/icon/icon'

export default {
  data () {
    return {
      styleWidth: window.innerWidth,
      styleHeight: window.innerHeight
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
        width: (this.styleWidth / 4) + 'px',
        height: (this.styleHeight / 4) + 'px'
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
      this.$store.state.menu ? this.$store.dispatch('VIEW_MENU', false) : this.$store.dispatch('VIEW_MENU', true)
      document.body.classList.remove('body-stop')
      this.$router.push(e)
    },
    myEventHandler (e) {
      this.styleWidth = e.target.innerWidth
      this.styleHeight = e.target.innerHeight
    }
  }
}

</script>
