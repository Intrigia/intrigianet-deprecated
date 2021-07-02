<template>
  <div>
    <!-- Authors input -->
    <q-select
      class="q-mb-lg"
      label="Författare"
      hint="Vilken / vilka författare har skrivit källan? Skriv namnet och tryck enter (↵) för att lägga till en ny författare."
      placeholder="ex: N. Y. Källa (Niclas Yngmar Källa)"
      v-model="authors"
      use-input
      use-chips
      multiple
      hide-dropdown-icon
      input-debounce="0"
      new-value-mode="add"
    />

    <!-- Title input -->
    <q-input 
      class="q-mb-lg" 
      v-model="title"
      label="Titel" 
      hint="Vad heter boken?" 
    />

    <!-- Edition -->
    <q-input 
      class="q-mb-lg" 
      v-model="edition"
      label="Utgåva" 
      placeholder="ex: 2:a upplagan"
      hint="Vilken version är din bok?" 
    />

    <!-- Place of publication input -->
    <q-input 
      class="q-mb-lg" 
      v-model="publicationPlace"
      label="Tryckort" 
      placeholder="ex: Stockholm, Sverige"
      hint="Vart är utgivaren? Skriv stad först och land därefter." 
    />

    <!-- Publisher -->
    <q-input 
      class="q-mb-lg" 
      v-model="org"
      label="Utgivare"
      placeholder="ex: Intrigia Student Media"
      hint="Vad heter utgivaren / de som publicerade boken?" 
    />

    <!-- Publication year input -->
    <q-input 
      class="q-mb-lg" 
      v-model="date"
      label="År"
      hint="Vilket år trycktes boken?"
    />

    <!-- Page reference input -->
    <q-input 
      class="q-mb-lg" 
      v-model="page"
      label="Sida"
      placeholder="ex: s. 26"
      hint="Vilken sida refererar du till?"
    />


  </div>
</template>

<script>
export default {
  props: ['source', 'index'],
  computed: {
    authors: {
      get() {
        return this.source.authors
      },
      set(authors) {
        this.$emit('setAuthors', {
          index: this.index,
          authors: authors
        })
      }
    },
    title: {
      get() {
        return this.source.title
      },
      set(title) {
        this.$emit('setTitle', {
          index: this.index,
          title: title
        })
      }
    },
    edition: {
      get() {
        return this.source.edition
      },
      set(edition) {
        this.$emit('setEdition', {
          index: this.index,
          edition: edition
        })
      }
    },
    publicationPlace: {
      get() {
        return this.source.publication_place
      },
      set(publication_place) {
        this.$emit('setPubPlace', {
          index: this.index,
          publication_place: publication_place
        })
      }
    },
    org: {
      get() {
        return this.source.org
      },
      set(org) {
        this.$emit('setOrg', {
          index: this.index,
          org: org
        })
      }
    },
    date: {
      get() {
        return this.source.date
      },
      set(date) {
        this.$emit('setDate', {
          index: this.index,
          date: date
        })
      }
    },
    page: {
      get() {
        return this.source.page
      },
      set(page) {
        this.$emit('setPage', {
          index: this.index,
          page: page
        })
      }
    }
  }
}
</script>

