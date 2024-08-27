<template lang='pug' src='./form.pug'></template>

<script>
import axios from 'axios'
import { openModal, closeModal } from '@/methods'
export default {
  data: () => {
    return {
      fullname: '',
      phone: '',
      email: '',
      message: '',
      newPatient: '',
      postUrl: 'https://www.mattiacioortho.com/wp-json/rg-mail/v1/contact',
      formSubmitted: false,
      agreeToTerms: false
    }
  },
  mixins: [openModal, closeModal],
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
        fullname: this.fullname,
        phone: this.phone,
        email: this.email,
        message: this.message,
        newPatient: this.newPatient
      })
      .then(res => {
        this.formSubmitted = false
        this.openModal(1)
        setTimeout(() => {
          this.$el.children[0].reset()
        }, 500)
        this.closeModal(2)
        // this.openModal(1)
        window.location = '/thank-you'
      })
      .catch(e => { console.log(e) })
    }
  }
}
</script>
