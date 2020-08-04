<template lang='pug' src='./hero-pages.pug'></template>

<script>
import Icon from 'components/icon/icon'

export default {
  props: ['props'],
  computed: {
    classList () {
      return {
        'active': this.$store.state.menu
      }
    }
  },
  components: {
    Icon
  },
  methods: {
    makeAppt () {
      this.$router.push('/contact-us#form')
    }
  }
}
</script>
