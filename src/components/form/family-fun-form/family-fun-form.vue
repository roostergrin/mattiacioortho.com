<template lang='pug' src='./family-fun-form.pug'></template>

<script>
import api from 'api'
import axios from 'axios'
import { openModal, closeModal } from '@/methods'

export default {
  data: () => {
    return {
      fullName: '',
      fullNameFriend: '',
      phone: '',
      email: '',
      howMany: '',
      postUrl: api + '/rg-mail/v1/family-fun',
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
        fullName: this.fullName,
        fullNameFriend: this.fullNameFriend,
        phone: this.phone,
        howMany: this.howMany,
        email: this.email
      })
      .then(res => {
        this.formSubmitted = false
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
