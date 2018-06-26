<template lang='pug' src='./event-modal.pug'></template>

<script>
import EventForm from 'components/form/family-fun-form/family-fun-form'
import { closeModal } from '@/methods'

export default {
  computed: {
    props () {
      return this.$store.state.app.information
    }
  },
  mixins: [closeModal],
  components: {
    EventForm
  }
}
</script>
