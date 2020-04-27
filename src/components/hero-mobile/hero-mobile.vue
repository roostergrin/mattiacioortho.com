<template lang='pug' src='./hero-mobile.pug'></template>

<script>
import Icon from 'components/icon/icon'

export default {
  data () {
    return {
      scroll: false
    }
  },
  props: ['props'],
  components: {
    Icon
  },
  methods: {
    scrollOut () {
      this.$store.dispatch('VIEW_NAV', true)
    },
    scrollIn () {
      this.$store.dispatch('VIEW_NAV', false)
    },
    makeAppt () {
      this.$router.push('/contact-us#form')
    }
  }
}
</script>
