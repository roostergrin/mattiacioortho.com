<template lang='pug' src='./review.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'Review',
  computed: {
    props () {
      return this.$store.state.pages['review']
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
