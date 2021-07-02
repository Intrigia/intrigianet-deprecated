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
      label="Rubrik" 
      hint="Vilken rubrik / titel har källan?" 
    />
    
    <!-- Organization input -->
    <q-input 
      class="q-mb-lg" 
      v-model="org"
      label="Organisation / Hemsida" 
      hint="Vart hittade du hemsidan? Vad heter sidan / företaget?" 
    />

    <!-- Link input -->
    <q-input 
      class="q-mb-lg" 
      v-model="link"
      label="Länk"
      placeholder="https://www.hemsida.com"
      hint="Med vilken länk kan andra se din källa?" 
    />

    <!-- Date slector -->
    <q-input 
      class="q-mb-lg" 
      v-model="date"
      label="YYYY-MM-DD HH:mm"
      hint="När hämtade du källan? Klicka på kalender- eller klockikonen för att välja datum och tid."
    >
      <template v-slot:prepend>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-date v-model="date" mask="YYYY-MM-DD HH:mm">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>

      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format24h>
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
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
    link: {
      get() {
        return this.source.link
      },
      set(link) {
        this.$emit('setLink', {
          index: this.index,
          link: link
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
    }
  }
}
</script>

