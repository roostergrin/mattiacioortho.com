<template lang='pug' src='./header.pug'></template>

<script>
import HomeHero from 'components/home-hero/home-hero'
import Menu from 'components/menu/menu'

export default {
  data () {
    return {
      scroll: false
    }
  },
  components: {
    HomeHero,
    Menu
  },
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
