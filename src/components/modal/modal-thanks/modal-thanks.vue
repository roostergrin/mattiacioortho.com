<template lang='pug' src='./modal-thanks.pug'></template>

<script>
import Icon from 'components/icon/icon'
export default {
  components: {
    Icon
  },
  methods: {
    closeThanks () {
      this.$store.dispatch('VIEW_THANKS', false)
    }
  }
}
</script>
