<template lang='pug' src='./about-us.pug'></template>

<script>
import Loader from 'components/loader/loader'
import MeetDr from 'components/custom/custom-about-meet-dr/custom-about-meet-dr'
import MeetTeam from 'components/custom/custom-about-team/custom-about-team'
import Office from 'components/custom/custom-about-office/custom-about-office'

export default {
  name: 'about-us',
  computed: {
    props () {
      return this.$store.state.pages['about-us']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    MeetDr,
    MeetTeam,
    Office
  }
}
</script>
