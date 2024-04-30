<template lang='pug' src='./admin-links.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'admin-links',
  computed: {
    props () {
      return this.$store.state.pages['admin-links']
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
