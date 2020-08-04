<template lang='pug' src='./hero-pages.pug'></template>

<script>
import Icon from 'components/icon/icon'

export default {
  computed: {
    classList () {
      return {
        'active': this.$store.state.menu
      }
    }
  },
  components: {
    Icon
  }
}
</script>
