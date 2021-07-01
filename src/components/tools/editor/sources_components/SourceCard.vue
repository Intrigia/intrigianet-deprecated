<template>
  <q-card>
    <q-card-section>
      <q-select 
        v-model="selectedType" 
        :options="options" 
        label="Källtyp" 
        hint="Vilken typ av källa har du valt?"
        emit-value
        map-options
      />
    </q-card-section>
    <q-card-section>
      <component 
        :is="source.type" 
        :index="index"
        :source="source"
        @setAuthors="setAuthors($event)"
        @setTitle="setTitle($event)"
        @setSource="setSource($event)"
        @setLink="setLink($event)"
        @setDate="setDate($event)"
      ></component>
    </q-card-section>
  </q-card>
</template>

<script>
import TypeBook from "components/tools/editor/sources_components/source_card_types/SourceTypeBook.vue";
import TypeVideo from "components/tools/editor/sources_components/source_card_types/SourceTypeVideo.vue";
import TypeWebsite from "components/tools/editor/sources_components/source_card_types/SourceTypeWebsite.vue";

export default {
  props: ['source', 'index'],
  components: {
    TypeBook,
    TypeVideo,
    TypeWebsite
  },  
  data () {
    return {
      options: [
        {
          label: 'Hemsida / Artikel',
          value: 'TypeWebsite'
        },
        {
          label: 'Bok',
          value: 'TypeBook'
        },
        {
          label: 'Video',
          value: 'TypeVideo'
        }
      ],
    }
  },
  methods: {
    setAuthors(author) {
      this.$emit('setAuthors', author)
    },
    setTitle(title) {
      this.$emit('setTitle', title)
    },
    setSource(source) {
      this.$emit('setSource', source)
    },
    setLink(link) {
      this.$emit('setLink', link)
    },
    setDate(date) {
      this.$emit('setDate', date)
    },
  },
  computed: {
    selectedType: {
      get() {
        return this.source.type
      },
      set(type) {
        this.$emit('setType', {
          index: this.index,
          type: type
        })
      }
    },
  }
}
</script>

