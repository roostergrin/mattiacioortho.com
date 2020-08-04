<template lang='pug' src='./nav-mobile.pug'></template>

<script>
import Icon from 'components/icon/icon'
import Bottom from '../nav-bottom/nav-bottom'

export default {
  data () {
    return {
      active: false
    }
  },
  computed: {
    props () {
      return this.$store.state.app.information
    },
    links () {
      return this.$router.options.routes
    }
  },
  components: {
    Icon,
    Bottom
  },
  methods: {
    toggleMenu () {
      this.active = !this.active
    },
    slideDrawer () {
      this.active = !this.active
    },
    closeDrawer () {
      this.active = false
    }
  }
}
</script>
