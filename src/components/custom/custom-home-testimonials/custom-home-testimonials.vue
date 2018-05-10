<template lang='pug' src='./custom-home-testimonials.pug'></template>

<script>
import Icon from 'components/icon/icon'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        autoplay: {
          delay: 5000
        },
        spaceBetween: 0,
        speed: 1000,
        loop: true,
        navigation: {
          nextEl: '.custom-home-testimonials__next',
          prevEl: '.custom-home-testimonials__prev'
        },
        pagination: {
          el: '.custom-home-testimonials__pagination',
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
  },
  methods: {
    openVideo () {
      console.log('click')
    }
  }
}
</script>
