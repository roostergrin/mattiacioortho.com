<template lang='pug' src='./review.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  data: () => ({
    globalpass: null // local variable for globalpass
  }),
  name: 'Review',
  computed: {
    props () {
      return this.$store.state.pages['review']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader
  },
  watch: {
    'props.acf.wpass' (newValue) {
      const urlParams = new URLSearchParams(window.location.search)
      let skip = urlParams.get('skip')

      if (skip) {
        skip = skip.toString()
      }

      if (skip !== '1') {
        if (newValue && newValue !== '') {
          this.globalpass = newValue // Set globalpass when wpass changes

          let pass = prompt('Enter Password')

          if (pass !== this.globalpass) {
            this.$router.push('/home')
          }
        }
      }
    }
  }
}
</script>
