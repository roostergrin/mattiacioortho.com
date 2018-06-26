<template lang='pug' src='./family-fun-form.pug'></template>

<script>
import api from 'api'
import axios from 'axios'
import { openModal } from '@/methods'

export default {
  data: () => {
    return {
      fullName: '',
      phone: '',
      email: '',
      familyMembers: '',
      days: '',
      guestName: '',
      guestEmail: '',
      postUrl: api + '/rg-mail/v1/family-fun',
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
        patientName: this.phone,
        contactInfo: this.email,
        eventName: this.familyMembers,
        date: this.days,
        cause: this.guestName,
        website: this.guestEmail
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
