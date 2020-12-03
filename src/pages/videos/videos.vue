<template lang='pug' src='./videos.pug'></template>

<script>
import Divider from 'components/divider/divider'
import Loader from 'components/loader/loader'
import Videos from 'components/custom/custom-videos/custom-videos'

export default {
  name: 'videos',
  computed: {
    props () {
      return this.$store.state.pages['videos']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Divider,
    Loader,
    Videos
  }
}
</script>
