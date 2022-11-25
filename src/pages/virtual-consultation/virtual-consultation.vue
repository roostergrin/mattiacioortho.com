<template lang='pug' src='./virtual-consultation.pug'></template>

<script>
import Divider from 'components/divider/divider'
import Loader from 'components/loader/loader'
import CustomVirtualConsultationBanner from 'components/custom/custom-virtual-consultation-banner/custom-virtual-consultation-banner'
import CustomVirtualConsultationHow from 'components/custom/custom-virtual-consultation-how/custom-virtual-consultation-how'

export default {
  name: 'virtual-consultation',
  computed: {
    props () {
      return this.$store.state.pages['virtual-consultation']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Divider,
    Loader,
    CustomVirtualConsultationBanner,
    CustomVirtualConsultationHow
  }
}
</script>

