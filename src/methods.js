export const openModal = {
  methods: {
    openModal (i) {
      if (i === 1) {
        this.$store.dispatch('VIEW_THANKS', true)
      }
      if (i === 2) {
        this.$store.dispatch('VIEW_SHOWMODAL', true)
        document.body.classList.add('body-stop')
      }
      if (i === 3) {
        this.$store.dispatch('VIEW_VIDEO', true)
        document.body.classList.add('body-stop')
      }
      if (i === 4) {
        this.$store.dispatch('VIEW_EVENT', true)
        document.body.classList.add('body-stop')
      }
    }
  }
}

export const closeModal = {
  methods: {
    closeModal (i) {
      if (i === 1) {
        this.$store.dispatch('VIEW_SHOWMODAL', false)
        document.body.classList.remove('body-stop')
      }
      if (i === 2) {
        this.$store.dispatch('VIEW_EVENT', false)
        document.body.classList.remove('body-stop')
      }
    }
  }
}
