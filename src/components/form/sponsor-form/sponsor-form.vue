<template lang='pug' src='./sponsor-form.pug'></template>

<script>
// import api from 'api'
import axios from 'axios'
import { openModal } from '@/methods'

export default {
  data: () => {
    return {
      fullName: '',
      patientName: '',
      contactInfo: '',
      eventName: '',
      date: '',
      cause: '',
      website: '',
      // newPatient: '',
      postUrl: 'https://www.mattiacioortho.com/wp-json/rg-mail/v1/sponsor',
      formSubmitted: false
    }
  },
  mixins: [openModal],
  methods: {
    validate () {
      this.$validator.validateAll()
      .then(result => {
        if (result) {
          this.onSubmit()
        }
      })
      .catch((e) => {
        console.log(e)
      })
    },
    onSubmit () {
      this.formSubmitted = true
      axios.post(this.postUrl, {
        fullName: this.fullName,
        patientName: this.patientName,
        contactInfo: this.contactInfo,
        eventName: this.eventName,
        date: this.date,
        cause: this.cause,
        website: this.website
      })
      .then(res => {
        this.formSubmitted = false
        this.openModal(1)
        setTimeout(() => {
          this.$el.children[0].reset()
        }, 500)
      })
      .catch(e => { console.log(e) })
    }
  }
}
</script>
