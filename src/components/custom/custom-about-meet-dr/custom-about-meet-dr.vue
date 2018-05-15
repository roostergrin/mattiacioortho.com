<template lang="pug" src="./custom-about-meet-dr.pug"></template>

<script>
import Icon from 'components/icon/icon'
export default {
  props: ['props'],
  methods: {
    showContent (i) {
      this.$store.dispatch('VIEW_TYPES', i)
    }
  },
  components: {
    Icon
  }
}
</script>
