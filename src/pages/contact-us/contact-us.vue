<template lang='pug' src='./contact-us.pug'></template>

<script>
import Header from 'components/custom/custom-contact-header/custom-contact-header'
import Loader from 'components/loader/loader'

export default {
  name: 'contact-us',
  computed: {
    props () {
      return this.$store.state.pages['contact-us']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Header,
    Loader
  }
}
</script>
