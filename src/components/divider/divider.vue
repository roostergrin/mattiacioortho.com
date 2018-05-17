<template lang="pug" src="./divider.pug"></template>

<script>

export default {
  computed: {
    props () {
      return this.$store.state.app.information
    }
  }
}
</script>
