<template>
  <q-card>
    <q-card-section>
      <q-select 
        v-model="selectedType" 
        :options="options" 
        label="Källtyp" 
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
          label: 'Hemsida / länk',
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
      // For the author select

    }
  },
  methods: {
    setAuthors(author) {
      this.$emit('setAuthors', author)
    }
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

