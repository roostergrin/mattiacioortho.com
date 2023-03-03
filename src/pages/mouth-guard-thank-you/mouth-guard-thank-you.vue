<template lang='pug' src='./mouth-guard-thank-you.pug'></template>

<script>
import Loader from 'components/loader/loader'
import mouthGuardThankYous from 'components/custom/custom-mouth-guard-thank-you/custom-mouth-guard-thank-you'

export default {
  name: 'mouth-guard-thank-you',
  computed: {
    props () {
      return this.$store.state.pages['mouth-guard-thank-you']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    mouthGuardThankYous
  }
}
</script>
