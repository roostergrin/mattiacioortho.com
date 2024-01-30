<template lang='pug' src='./smile-assurance-program.pug'></template>

<script>
import Loader from 'components/loader/loader'
import smileAssuranceForm from 'components/form/smile-assurance-form/smile-assurance-form'

export default {
  name: 'Smile Assurance Program',
  computed: {
    props () {
      return this.$store.state.pages['smile-assurance-program']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    smileAssuranceForm
  }
}
</script>
