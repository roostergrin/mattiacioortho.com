<template lang='pug' src='./custom-videos.pug'></template>

<script>
export default {
  data () {
    return {
      activeTab: 0,
      hoverTab: 0,
      mobileTabs: [],
      openVideoPlayer: null,
      videoPlaying: false
    }
  },
  props: ['props'],
  methods: {
    toggleMobileTab (i) {
      !this.mobileTabs.includes(i) ? this.mobileTabs.push(i) : this.mobileTabs.splice(this.mobileTabs.indexOf(i), 1)
    },
    loadVideo (i, j) {
      this.openVideoPlayer = i
      // initiate video preloading
      let id = `video-${j}${i}`
      document.getElementById(id).play()
      document.getElementById(id).pause()
    },
    playVideo (i, j) {
      this.videoPlaying = true
      let id = `video-${j}${i}`
      document.getElementById(id).play()
    },
    closeVideo (i, j) {
      this.openVideoPlayer = null
      this.videoPlaying = false
      // reset the video to the beginning after closing
      let id = `video-${j}${i}`
      document.getElementById(id).pause()
      document.getElementById(id).currentTime = 0
    }
  }
}
</script>
