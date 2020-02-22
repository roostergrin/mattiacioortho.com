<template lang='pug' src='./home.pug'></template>

<script>
import FunEvent from 'components/custom/custom-app-event/custom-app-event'
import Loader from 'components/loader/loader'
import Retainers from 'components/custom/custom-home-retainers/custom-home-retainers'
import Testimonials from 'components/custom/custom-home-testimonials/custom-home-testimonials'
import Welcome from 'components/custom/custom-home-welcome/custom-home-welcome'
import Why from 'components/custom/custom-home-why/custom-home-why'
import CustomHomeReview from 'components/custom/custom-home-footer-review/custom-home-footer-review'

export default {
  name: 'home',
  computed: {
    props () {
      return this.$store.state.pages.home
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    FunEvent,
    Loader,
    Retainers,
    Testimonials,
    Welcome,
    Why,
    CustomHomeReview
  }
}
</script>
