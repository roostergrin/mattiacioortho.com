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
    }
  }
}

export const closeModal = {
  methods: {
    closeModal () {
      this.$store.dispatch('VIEW_SHOWMODAL', false)
      document.body.classList.remove('body-stop')
    }
  }
}
