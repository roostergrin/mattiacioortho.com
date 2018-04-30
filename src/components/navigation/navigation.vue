<template lang='pug' src='./navigation.pug'></template>

<script>
import Desktop from './nav-desktop/nav-desktop'
import Mobile from './nav-mobile/nav-mobile'

export default {
  props: ['props'],
  components: {
    Desktop,
    Mobile
  }
}

</script>
