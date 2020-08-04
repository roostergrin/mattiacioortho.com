<template lang='pug' src='./covid-19-updates.pug'></template>

<script>
import Divider from 'components/divider/divider'
import Loader from 'components/loader/loader'
import COVID19 from 'components/custom/custom-covid-19-updates/custom-covid-19-updates'

export default {
  name: 'covid-19 updates',
  computed: {
    props () {
      return this.$store.state.pages['covid-19-updates']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Divider,
    Loader,
    COVID19
  }
}
</script>
