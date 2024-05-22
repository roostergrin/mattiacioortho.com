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
    async onSubmit () {
      try {
        this.formSubmitted = true

        await axios.post(this.postUrl, {
          fullname: this.fullname,
          phone: this.phone,
          email: this.email,
          message: this.message,
          newPatient: this.newPatient
        })

        try {
          const trackingData = JSON.parse(sessionStorage.getItem('sessionTrackingData')) ? JSON.parse(sessionStorage.getItem('sessionTrackingData')).trackingParams : undefined
          const referrerSource = trackingData ? trackingData.referrerSource : undefined
          const utmSource = trackingData ? trackingData.source : undefined
          const campaign = trackingData ? trackingData.campaign : undefined
          const baseUrl = 'https://api.threadcommunication.com'

          const response = await axios.post(`${baseUrl}/api/v1/website_leads`,
            {
              first_name: this.fullname.split(' ')[0],
              last_name: this.fullname.split(' ').slice(1).join(' '),
              email: this.email,
              phone: this.phone,
              message: this.message,
              referrer_source: referrerSource,
              utm_source: utmSource,
              campaign_name: campaign
            },
            {
              headers: {
                'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmlnaW4iOiJodHRwczovL3d3dy5tYXR0aWFjaW9vcnRoby5jb20vIiwicHJhY3RpY2VfaWQiOiIyNjQifQ.gjnqfJ3U9O__I7-7WZ8BaPGEVdiVIOoifZ9giYcdY9k',
                'Content-Type': 'application/json'
              }
            }
          )

          if (response.message) {
            console.warn(response.message)
          }
        } catch (error) {
          console.error('New Lead not created in RG CRM.', error)
        }

        this.formSubmitted = false
        this.openModal(1)
        setTimeout(() => {
          this.$el.children[0].reset()
        }, 500)
        this.closeModal(2)
        window.location = '/thank-you'
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
