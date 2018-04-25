<template lang='pug' src='./mattiacio-difference.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'mattiacio-difference',
  computed: {
    props () {
      return this.$store.state.pages['mattiacio-difference']
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
