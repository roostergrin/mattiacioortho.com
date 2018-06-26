<template lang='pug' src='./new-patients.pug'></template>

<script>
import Divider from 'components/divider/divider'
import Financial from 'components/custom/custom-new-pats-financial/custom-new-pats-financial'
import First from 'components/custom/custom-new-pats-first/custom-new-pats-first'
import FunEvent from 'components/custom/custom-app-event/custom-app-event'
import Loader from 'components/loader/loader'
import Patients from 'components/custom/custom-new-pats-patients/custom-new-pats-patients'

export default {
  name: 'new-patients',
  computed: {
    props () {
      return this.$store.state.pages['new-patients']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Divider,
    Financial,
    First,
    FunEvent,
    Loader,
    Patients
  }
}
</script>
