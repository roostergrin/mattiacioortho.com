<template lang='pug' src='./virtual-services.pug'></template>

<script>
import Divider from 'components/divider/divider'
import Loader from 'components/loader/loader'
import VirtualServices from 'components/custom/custom-virtual-services/custom-virtual-services'

export default {
  name: 'Virtual Services',
  computed: {
    props () {
      return this.$store.state.pages['virtual-services']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Divider,
    Loader,
    VirtualServices
  }
}
</script>
