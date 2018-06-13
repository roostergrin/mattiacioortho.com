<template lang="pug" src="./custom-treatments-invisalign.pug"></template>

<script>
import Icon from 'components/icon/icon'

export default {
  props: ['props'],
  components: {
    Icon
  },
  methods: {
    toInvisalign () {
      let options = { offset: -90 }
      this.$router.push('/invisalign')
      setTimeout(() => { this.$scrollTo('#section-0', options) }, 1300)
    }
  }
}
</script>
