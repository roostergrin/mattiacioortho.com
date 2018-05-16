<template lang='pug' src='./custom-treatments-adults.pug'></template>

<script>
import Icon from 'components/icon/icon'

export default {
  props: ['props'],
  computed: {
    shape () {
      return require(`@/assets/icons/Group.svg`)
    }
  },
  components: {
    Icon
  }
}
</script>
