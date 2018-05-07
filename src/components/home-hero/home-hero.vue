<template lang='pug' src='./home-hero.pug'></template>

<script>
export default {
  computed: {
    classList () {
      return {
        'active': this.$store.state.menu
      }
    }
  }
}
</script>
