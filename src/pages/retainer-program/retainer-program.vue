<template lang='pug' src='./retainer-program.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'Retainer Program',
  computed: {
    props () {
      return this.$store.state.pages['retainer-program']
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
