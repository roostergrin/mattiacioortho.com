<template lang='pug' src='./custom-home-footer-review.pug'></template>

<script>
export default {
  props: ['props'],
  methods: {
    welcome1Click () {
      let options = { offset: -90 }
      this.$router.push('/invisalign')
      setTimeout(() => {
        this.$scrollTo('#invilignsection1', options)
      },
      1300)
    }
  }
}
</script>
