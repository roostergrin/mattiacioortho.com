<template lang='pug' src='./menu.pug'></template>

<script>

export default {
  computed: {
    links () {
      return this.$router.options.routes
    },
    classList () {
      return {
        'active': this.$store.state.menu
      }
    }
  },
  created () {
    console.log(this.$route)
  },
  methods: {
    closeMenu (e) {
      console.log(e)
      this.$store.state.menu ? this.$store.dispatch('VIEW_MENU', false) : this.$store.dispatch('VIEW_MENU', true)
      this.$router.push(e)
    }
  }
}

</script>
