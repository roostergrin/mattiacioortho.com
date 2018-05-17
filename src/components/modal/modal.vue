<template lang='pug' src='./modal.pug'></template>

<script>
import Platinum from 'components/custom/custom-platinum/custom-platinum'
import { closeModal } from '@/methods'

export default {
  props: ['data'],
  mixins: [closeModal],
  components: {
    Platinum
  }
}
</script>
