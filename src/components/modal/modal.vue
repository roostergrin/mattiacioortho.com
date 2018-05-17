<template lang='pug' src='./modal.pug'></template>

<script>
// import Form from 'components/form/form'
import { closeModal } from '@/methods'

export default {
  props: ['data'],
  mixins: [closeModal],
  components: {
    // Form
  }
}
</script>
