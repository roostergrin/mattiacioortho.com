<template lang='pug' src='./home-hero.pug'></template>

<script>
import Icon from 'components/icon/icon'

export default {
  computed: {
    props () {
      return this.$store.state.app.information
    },
    classList () {
      return {
        'active': this.$store.state.menu
      }
    }
  },
  mounted () {
    this.$store.dispatch('VIEW_BODY', true)
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
