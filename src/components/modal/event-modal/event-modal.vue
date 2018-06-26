<template lang='pug' src='./event-modal.pug'></template>

<script>
import { closeModal } from '@/methods'

export default {
  props: ['data'],
  mixins: [closeModal],
  components: {

  }
}
</script>
