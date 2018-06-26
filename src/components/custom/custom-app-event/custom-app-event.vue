<template lang="pug" src="./custom-app-event.pug"></template>

<script>

export default {
  computed: {
    props () {
      return this.$store.state.app.information
    }
  },
  components: {

  }
}
</script>
