<template>
  <q-expansion-item
    v-model="sourcesExpanded"
    icon="source"
    label="Källförteckning"
    caption="Clicka för att se och ändra dina källor"
  >
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
            label="B. K. Kiraly, P. Pastor, A. A. Nofi,. ‘Revolutions and Interventions in Hungary and its Neighbor States, 1918-1919’,. Atlantic Studies on Societies in Change,. sida 31-55"
            header-class="text-grey-8"
          >
            <SourceCard 
              @setAuthors="setAuthors($event)" 
              @setType="setType($event)"
              :index="i" 
              :source="source" 
            />
            
          </q-expansion-item>
          <q-separator />
        </div>
        
      </q-list>
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
    setType(type) {
      this.$emit('setType', type)
    },
    setAuthors(author) {
      this.$emit('setAuthors', author)
    }
  },
}
</script>

