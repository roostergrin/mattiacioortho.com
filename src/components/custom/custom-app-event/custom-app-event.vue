<template lang="pug" src="./custom-app-event.pug"></template>

<script>
import { openModal } from '@/methods'

export default {
  computed: {
    props () {
      return this.$store.state.app.information
    }
  },
  mixins: [openModal],
  components: {

  }
}
</script>
