<template lang='pug' src='./hero-mobile.pug'></template>

<script>

export default {
  data () {
    return {
      scroll: false
    }
  },
  // components: {
  // },
  methods: {
    scrollOut () {
      this.$store.dispatch('VIEW_NAV', true)
    },
    scrollIn () {
      this.$store.dispatch('VIEW_NAV', false)
    }
  }
}
</script>
