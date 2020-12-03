<template lang='pug' src='./custom-videos.pug'></template>

<script>
export default {
  data () {
    return {
      activeTab: 0,
      hoverTab: 0,
      mobileTabs: [0],
      openVideoPlayer: null
      // activeVideoSrc: '',
      // activeVideoPoster: ''
    }
  },
  props: ['props'],
  methods: {
    toggleMobileTab (i) {
      !this.mobileTabs.includes(i) ? this.mobileTabs.push(i) : this.mobileTabs.splice(this.mobileTabs.indexOf(i), 1)
    },
    playVideo (i, j) {
      this.openVideoPlayer = i
      let id = `video-${j}${i}`
      document.getElementById(id).play()
      // this.activeVideoSrc = this.props[j].videos[i].src
      // this.activeVideoPoster = this.props[j].videos[i].image
    },
    closeVideo (i, j) {
      this.openVideoPlayer = null
      let id = `video-${j}${i}`
      document.getElementById(id).pause()
      document.getElementById(id).currentTime = 0
      // this.activeVideoSrc = ''
      // this.activeVideoPoster = ''
    }
  }
}
</script>
