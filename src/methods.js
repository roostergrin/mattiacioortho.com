export const openModal = {
  methods: {
    openModal () {
      this.$store.dispatch('VIEW_SHOWMODAL', true)
      document.body.classList.add('body-stop')
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
