<template lang='pug' src='./exit-interview.pug'></template>

<script>
import Loader from 'components/loader/loader'
import exitInterviewForm from 'components/form/exit-interview-form/exit-interview-form'
import Vue from 'vue'
import VueConfetti from 'vue-confetti'

Vue.use(VueConfetti)

export default {
  data: () => ({
    globalpass: null // local variable for globalpass
  }),
  name: 'Exit Interview',
  computed: {
    props () {
      return this.$store.state.pages['exit-interview']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    exitInterviewForm
  },
  mounted () {
    this.$nextTick().then(this.start)
  },
  watch: {
    'props.acf.wpass' (newValue) {
      const urlParams = new URLSearchParams(window.location.search)
      let skip = urlParams.get('skip')

      if (skip) {
        skip = skip.toString()
      }

      if (skip !== '1') {
        if (newValue && newValue !== '') {
          this.globalpass = newValue // Set globalpass when wpass changes

          let pass = prompt('Enter Password')

          if (pass !== this.globalpass) {
            this.$router.push('/home')
          }
        }
      }
    }
  },
  methods: {
    start () {
      this.$confetti.start({
        particles: [
          {
            type: 'circle',
            size: '4'
          }
        ]
      })
      setTimeout(() => {
        this.$confetti.stop()
      }, 5000)
    }
  }
}
</script>
