<template lang="pug" src="./custom-platinum.pug"></template>

<script>
import Icon from 'components/icon/icon'

export default {
  computed: {
    props () {
      return this.$store.state.app.information
    }
  },
  components: {
    Icon
  }
}
</script>
