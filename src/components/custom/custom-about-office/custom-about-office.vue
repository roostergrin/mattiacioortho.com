<template lang='pug' src='./custom-about-office.pug'></template>

<script>
import Icon from 'components/icon/icon'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 0,
        speed: 700,
        loop: false,
        navigation: {
          nextEl: '.custom-about-office__next',
          prevEl: '.custom-about-office__prev'
        },
        pagination: {
          el: '.custom-about-office__pagination',
          clickable: true
        }
      }
    }
  },
  props: ['props'],
  components: {
    Icon,
    swiper,
    swiperSlide
  }
}
</script>
