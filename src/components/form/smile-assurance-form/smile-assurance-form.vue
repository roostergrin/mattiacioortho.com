<template lang='pug' src='./smile-assurance-form.pug'></template>

<script>
// import api from 'api'
import axios from 'axios'
import { openModal, closeModal } from '@/methods'
export default {
  data: () => {
    return {
      radiographs: '',
      postUrl: 'https://www.mattiacioortho.com/wp-json/rg-mail/v1/smileassurance',
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
        radiographs: this.radiographs
      })
      .then(res => {
        this.formSubmitted = false
        this.openModal(1)
        setTimeout(() => {
          this.$el.children[0].reset()
        }, 500)
        this.closeModal(2)
        // this.openModal(1)
        window.location = '/feedback'
      })
      .catch(e => { console.log(e) })
    }
  }
}
</script>
