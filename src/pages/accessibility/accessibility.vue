<template lang='pug' src='./accessibility.pug'></template>

<script>
import Loader from 'components/loader/loader'
import ThankYou from 'components/custom/custom-thank-you/custom-thank-you'

export default {
  name: 'Accessibility',
  computed: {
    props () {
      return this.$store.state.pages['thank-you']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    ThankYou
  },
  data () {
    return {
      companyName: 'Mattiacio Orthodontics', // Fill this in
      domain: "<a href='https://www.mattiacioortho.com'>mattiacioortho.com</a>", // Fill this in
      email: "<a href='mailto:info@mattiacioortho.com'>info@mattiacioortho.com</a>", // Fill this in
      phone: "<a href='tel:1-585-742-1050'>585. 742. 1050</a>", // Fill this in
      formattedEmail: ''
    }
  },
  mounted () {
    this.formatEmail()
  },
  methods: {
    formatEmail () {
      this.formattedEmail = '<a aria-label="email ' + this.email + '" href="mailto:' + this.email + '">' + this.email + '</a>'
    }
  }
}
</script>
