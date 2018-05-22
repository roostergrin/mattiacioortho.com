<template lang='pug' src='./mattiacio-difference.pug'></template>

<script>
import Divider from 'components/divider/divider'
import Loader from 'components/loader/loader'
import What from 'components/custom/custom-mattiacio-what/custom-mattiacio-what'

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
    Divider,
    Loader,
    What
  }
}
</script>
