<template lang="pug" src="./custom-mattiacio-what.pug"></template>

<script>
import Icon from 'components/icon/icon'

export default {
  props: ['props'],
  methods: {
    showContent (i) {
      this.$store.dispatch('VIEW_TABS', i)
    }
  },
  components: {
    Icon
  }
}
</script>
