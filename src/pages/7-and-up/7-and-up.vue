<template lang='pug' src='./7-and-up.pug'></template>

<script>
import Loader from 'components/loader/loader'
import SevenUp from 'components/custom/custom-treatments-7up/custom-treatments-7up'

export default {
  name: '7 & Up',
  computed: {
    props () {
      return this.$store.state.pages['7-and-up']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    SevenUp
  }
}
</script>
