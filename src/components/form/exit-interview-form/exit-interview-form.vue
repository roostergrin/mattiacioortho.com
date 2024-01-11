<template lang='pug' src='./exit-interview-form.pug'></template>

<script>
// import api from 'api'
import axios from 'axios'
import { openModal, closeModal } from '@/methods'
export default {
  data: () => {
    return {
      message1: '',
      message2: '',
      message3: '',
      message4: '',
      radiographs: '',
      firstname: '',
      lastname: '',
      email: '',
      referby: '',
      postUrl: 'https://www.mattiacioortho.com/wp-json/rg-mail/v1/contactinterview',
      formSubmitted: false
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
        message1: this.message1,
        message2: this.message2,
        message3: this.message3,
        message4: this.message4,
        radiographs: this.radiographs,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        referby: this.referby
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
