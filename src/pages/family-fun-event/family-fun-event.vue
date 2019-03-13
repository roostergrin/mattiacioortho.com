<template lang='pug' src='./family-fun-event.pug'></template>

<script>
import FunEvent from 'components/custom/custom-app-event/custom-app-event'
import Loader from 'components/loader/loader'

export default {
  name: 'family-fun-event',
  computed: {
    props () {
      return this.$store.state.pages['family-fun-event']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    FunEvent,
    Loader
  }
}
</script>
