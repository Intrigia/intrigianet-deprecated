<template>
  <div>
    <q-select
      label="Författare"
      hint="Skriv och tryck enter (↵) för att lägga till ny författare"
      placeholder="A. A. Andersson (förnamn. mellannamn. efternamn)"
      v-model="authorsLocal"
      use-input
      use-chips
      multiple
      hide-dropdown-icon
      input-debounce="0"
      new-value-mode="add"
    />
  </div>
</template>

<script>
export default {
  props: ['source', 'index'],
  computed: {
    authorsLocal: {
      get() {
        return this.source.authors
      },
      set(authors) {
        this.$emit('setAuthors', {
          index: this.index,
          authors: authors
        })
      }
    }
  }
}
</script>

