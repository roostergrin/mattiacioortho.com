<template lang='pug' src='./family-fun-event.pug'></template>

<script>
import FunEvent from 'components/custom/custom-app-event/custom-app-event'
import Loader from 'components/loader/loader'

export default {
  name: 'Mouth Guard Registration',
  computed: {
    props () {
      return this.$store.state.pages['mouth-guard-registration']
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
