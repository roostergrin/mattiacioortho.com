<template lang='pug' src='./custom-covid-19-updates.pug'></template>

<script>
export default {
  props: ['props'],
  computed: {
    shape () {
      return require(`@/assets/icons/Group.svg`)
    }
  }
}
</script>
