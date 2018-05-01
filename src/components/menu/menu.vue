<template lang='pug' src='./menu.pug'></template>

<script>

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
    console.log(this.$router.options.routes.url)
    window.addEventListener('resize', this.myEventHandler)
  },
  methods: {
    closeMenu (e) {
      this.$store.state.menu ? this.$store.dispatch('VIEW_MENU', false) : this.$store.dispatch('VIEW_MENU', true)
      this.$router.push(e)
    },
    myEventHandler (e) {
      this.styleWidth = e.target.innerWidth
      this.styleHeight = e.target.innerHeight
    }
  }
}

</script>
