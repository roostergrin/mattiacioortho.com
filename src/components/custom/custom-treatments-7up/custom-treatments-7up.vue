<template lang="pug" src="./custom-treatments-7up.pug"></template>

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
      this.$router.push('/contact-us')
      setTimeout(() => { this.$scrollTo('#section-0', options) }, 1300)
    }
  }
}
</script>
