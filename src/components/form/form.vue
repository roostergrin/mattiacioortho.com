<template lang='pug' src='./form.pug'></template>

<script>
// import api from 'api'
import axios from 'axios'
import { openModal } from '@/methods'

export default {
  data: () => {
    return {
      fullname: '',
      phone: '',
      email: '',
      message: '',
      newPatient: '',
      postUrl: 'https://www.mattiacioortho.com/wp-json/rg-mail/v1/contact',
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
      })
      .catch(e => { console.log(e) })
    }
  }
}
</script>
