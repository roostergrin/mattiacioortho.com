<template lang='pug' src='./family-fun-form.pug'></template>

<script>
import api from 'api'
import axios from 'axios'
import { openModal, closeModal } from '@/methods'

export default {
  data: () => {
    return {
      fullName: '',
      phone: '',
      email: '',
      yourGrade: '',
      gender: '',
      postUrl: api + '/rg-mail/v1/family-fun',
      formSubmitted: false,
      selected: 'null'
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
        phone: this.phone,
        email: this.email,
        yourGrade: this.yourGrade,
        gender: this.gender,
        selected: this.selected
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
