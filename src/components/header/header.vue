<template lang='pug' src='./header.pug'></template>

<script>
import HeroMobile from 'components/hero-mobile/hero-mobile'
import HomeHero from 'components/home-hero/home-hero'
import HeroPages from 'components/hero-pages/hero-pages'
import Menu from 'components/menu/menu'

export default {
  data () {
    return {
      scroll: false
    }
  },
  computed: {
    props () {
      return this.$store.state.app.information
    },
    covid () {
      return this.$store.state.pages['covid-19-updates']
    }
  },
  components: {
    HeroMobile,
    HomeHero,
    HeroPages,
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
