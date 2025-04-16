<template lang='pug' src='./family-fun-form.pug'></template>

<script>
// import api from 'api'
import axios from 'axios'
import { openModal, closeModal } from '@/methods'
export default {
  data: () => {
    return {
      fullName: '',
      phone: '',
      email: '',
      dob1: '',
      dob2: '',
      yourParentGuardian: '',
      yourLaxProgram: '',
      postUrl: 'https://www.mattiacioortho.com/wp-json/rg-mail/v1/family-fun',
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
        dob1: this.dob1,
        dob2: this.dob2,
        yourParentGuardian: this.yourParentGuardian,
        yourLaxProgram: this.yourLaxProgram,
        selected: this.selected
      })
      .then(res => {
        this.formSubmitted = false
        setTimeout(() => {
          this.$el.children[0].reset()
        }, 500)
        this.closeModal(2)
        // this.openModal(1)
        window.location = '/mouth-guard-thank-you'
      })
      .catch(e => { console.log(e) })
    }
  }
}
</script>

<!-- The below code was previous form for Dumbo movie night event

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
      howMany: 0,
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
        window.location = '/mouth-guard-thank-you'
      })
      .catch(e => { console.log(e) })
    }
  }
}
</script>

-->
