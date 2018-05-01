<template lang='pug' src='./style-guide.pug'></template>

<script>
import Icon from 'components/icon/icon'

export default {
  data () {
    return {
      active: false
    }
  },
  computed: {
    svg () {
      return require(`@/assets/icons/Group.svg`)
    }
  },
  components: {
    Icon
  }
}
</script>
