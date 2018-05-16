<template lang='pug' src='./treatments.pug'></template>

<script>
import Invisalign from 'components/custom/custom-treatments-invisalign/custom-treatments-invisalign'
import Loader from 'components/loader/loader'

export default {
  name: 'treatments',
  computed: {
    props () {
      return this.$store.state.pages['treatments']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Invisalign,
    Loader
  }
}
</script>
