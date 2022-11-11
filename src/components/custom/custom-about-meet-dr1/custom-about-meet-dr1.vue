<template lang="pug" src="./custom-about-meet-dr1.pug"></template>

<script>
import Icon from 'components/icon/icon'
export default {
  props: ['props'],
  methods: {
    showContent1 (i) {
      this.$store.dispatch('VIEW_TABS', i)
    }
  },
  components: {
    Icon
  }
}
</script>
