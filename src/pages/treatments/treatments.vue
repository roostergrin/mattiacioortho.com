<template lang='pug' src='./treatments.pug'></template>

<script>
import Adults from 'components/custom/custom-treatments-adults/custom-treatments-adults'
import Damon from 'components/custom/custom-treatments-damon/custom-treatments-damon'
import Divider from 'components/divider/divider'
import Invisalign from 'components/custom/custom-treatments-invisalign/custom-treatments-invisalign'
import Loader from 'components/loader/loader'

export default {
  name: 'treatments',
  computed: {
    props () {
      return this.$store.state.pages['treatments']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Adults,
    Divider,
    Damon,
    Invisalign,
    Loader
  }
}
</script>
