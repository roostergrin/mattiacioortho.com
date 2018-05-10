<template lang='pug' src='./home.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Testimonials from 'components/custom/custom-home-testimonials/custom-home-testimonials'
import Welcome from 'components/custom/custom-home-welcome/custom-home-welcome'
import Why from 'components/custom/custom-home-why/custom-home-why'

export default {
  name: 'home',
  computed: {
    props () {
      return this.$store.state.pages.home
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    Testimonials,
    Welcome,
    Why
  }
}
</script>
