<template lang='pug' src='./home-hero.pug'></template>

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
