<template lang="pug" src="./custom-treatments-7up.pug"></template>

<script>
import Icon from 'components/icon/icon'
import Form from 'components/form/form'

export default {
  props: ['props'],
  components: {
    Icon,
    Form
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
