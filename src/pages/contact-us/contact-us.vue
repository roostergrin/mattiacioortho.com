<template lang='pug' src='./contact-us.pug'></template>

<script>
import Divider from 'components/divider/divider'
import FormSection from 'components/custom/custom-contact-form-section/custom-contact-form-section'
import FunEvent from 'components/custom/custom-app-event/custom-app-event'
import Header from 'components/custom/custom-contact-header/custom-contact-header'
import Loader from 'components/loader/loader'
import SponsorSection from 'components/custom/custom-contact-sponsor-section/custom-contact-sponsor-section'

export default {
  name: 'contact-us',
  computed: {
    props () {
      return this.$store.state.pages['contact-us']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Divider,
    FunEvent,
    FormSection,
    Header,
    Loader,
    SponsorSection
  }
}
</script>
