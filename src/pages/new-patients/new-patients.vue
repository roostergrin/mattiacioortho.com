<template lang='pug' src='./new-patients.pug'></template>

<script>
import First from 'components/custom/custom-new-pats-first/custom-new-pats-first'
import Loader from 'components/loader/loader'

export default {
  name: 'new-patients',
  computed: {
    props () {
      return this.$store.state.pages['new-patients']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    First,
    Loader
  }
}
</script>
