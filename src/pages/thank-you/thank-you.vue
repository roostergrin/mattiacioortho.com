<template lang='pug' src='./thank-you.pug'></template>

<script>
import Loader from 'components/loader/loader'
import ThankYou from 'components/custom/custom-thank-you/custom-thank-you'

export default {
  name: 'thank-you',
  computed: {
    props () {
      return this.$store.state.pages['thank-you']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    ThankYou
  }
}
</script>
