<template>
  <q-expansion-item
    v-model="sourcesExpanded"
    caption="Clicka för att se och ändra dina källor"
    class="source-expansion-item q-expansion-item--expanded"
  >
    <template v-slot:header>
      <q-item-section avatar>
        <q-icon name="source" color="primary" />
      </q-item-section>

      <q-item-section>
        Källförteckning
      </q-item-section>
    </template>
    <div class="q-pl-lg">
      <q-list>
        <div
          v-for="(source, i) in sources"
          :key="i"
        >
          <q-expansion-item
            border
            group="sources-group"
            icon="link"
            :label="sourceLabel(source.label, i)"
            header-class="text-grey-8"
            default-opened
          >
            <SourceCard 
              @setAuthors="setAuthors($event)" 
              @setType="setType($event)"
              @setTitle="setTitle($event)"
              @setEdition="setEdition($event)"
              @setPubPlace="setPubPlace($event)"
              @setOrg="setOrg($event)"
              @setLink="setLink($event)"
              @setDate="setDate($event)"
              @setPage="setPage($event)"
              :index="i" 
              :source="source" 
            />
            <div class="q-pb-lg row justify-center">
              <q-btn 
                label="Radera källa"
                icon="delete_outline"
                color="red"
                outline
                @click="$emit('deleteSource', i)"
              />
            </div>
          </q-expansion-item>
          <q-separator />
        </div>
      </q-list>
    </div>
    <div class="row justify-center q-pa-md">
      <q-btn 
        icon="add"
        outline
        round
        color="primary"
        @click="$emit('addNewSource', '')"
      />
    </div>
  </q-expansion-item>
</template>

<script>
import SourceCard from './SourceCard.vue'

export default {
  props: ['sources'],
  components: {
    SourceCard
  },
  data() {
    return {
      sourcesExpanded: false,
    }
  },
  methods: {
    sourceLabel(label, index) {
      var newLabel = ''
      
      // Loops through all the authors and appends them to newLabel string
      if ( this.sources[index].type != 'TypeVideo' ) {
        this.sources[index].authors.forEach((author, i, array) => {
          if ( i == array.length - 1 ) {
            newLabel = newLabel + author + ',. '
          } else {
            newLabel = newLabel + author + ', '
          }
        })
      }

      if ( this.sources[index].title.length > 0 && this.sources[index].type != 'TypeVideo' ) {
        newLabel = newLabel + "'" + this.sources[index].title + "',."
      } else if ( this.sources[index].title.length > 0 ) {
        newLabel = newLabel + "'" + this.sources[index].title + "' [online video] " + ",."
      }

      if ( this.sources[index].edition.length > 0 ) {
        newLabel = newLabel + ' ' + this.sources[index].edition + ",."
      }

      if ( this.sources[index].publication_place.length > 0 ) {
        newLabel = newLabel + ' ' + this.sources[index].publication_place + ",."
      }

      if ( this.sources[index].org.length > 0 ) {
        newLabel = newLabel + ' ' + this.sources[index].org + ',.'
      }

      if ( this.sources[index].link.length > 0 ) {
        newLabel = newLabel + ' ' + this.sources[index].link + " "
      }

      if ( this.sources[index].date.length > 0 && this.sources[index].type != 'TypeBook' ) {
        newLabel = newLabel + '(hämtad ' + this.sources[index].date + ')'
      } else if ( this.sources[index].date.length > 0 ) {
        newLabel = newLabel + ' ' + this.sources[index].date + ',.'
      }

      if ( this.sources[index].page.length > 0 ) {
        newLabel = newLabel + ' ' + this.sources[index].page 
      }

      // Emits the newLabel to Editor.vue
      this.$emit('setSourceLabel', {
        index: index,
        label: newLabel
      })
      return newLabel
    },
    setType(type) {
      this.$emit('setType', type)
    },
    setAuthors(author) {
      this.$emit('setAuthors', author)
    },
    setTitle(title) {
      this.$emit('setTitle', title)
    },
    setEdition(edition) {
      this.$emit('setEdition', edition)
    },
    setPubPlace(publication_place) {
      this.$emit('setPubPlace', publication_place)
    }, 
    setOrg(org) {
      this.$emit('setOrg', org)
    },
    setLink(link) {
      this.$emit('setLink', link)
    },
    setDate(date) {
      this.$emit('setDate', date)
    },
    setPage(page) {
      this.$emit('setPage', page)
    }

  },
}
</script>

<style>
  .source-expansion-item .q-item {
    padding: 0 !important;
  }
</style>

