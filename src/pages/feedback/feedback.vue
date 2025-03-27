<template lang='pug' src='./feedback.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'feedback-thank-you',
  computed: {
    props () {
      return this.$store.state.pages['feedback']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader
  }
}
</script>
