<template lang='pug' src='./exit-interview.pug'></template>

<script>
import Loader from 'components/loader/loader'
import exitInterviewForm from 'components/form/exit-interview-form/exit-interview-form'

export default {
  name: 'Exit Interview',
  computed: {
    props () {
      return this.$store.state.pages['exit-interview']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    exitInterviewForm
  }
}
</script>
