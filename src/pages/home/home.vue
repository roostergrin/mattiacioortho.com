<template lang='pug' src='./home.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Welcome from 'components/custom/custom-home-welcome/custom-home-welcome'

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
    Welcome
  }
}
</script>
