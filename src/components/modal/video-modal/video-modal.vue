<template lang='pug' src='./video-modal.pug'></template>

<script>

export default {
  props: ['props'],
  methods: {
    closeVideo () {
      this.$store.dispatch('VIEW_VIDEO', false)
      document.body.classList.remove('body-stop')
    }
  }
}
</script>
