<template>
  <q-item
    clickable
    tag="a"
    :to="link"
    v-ripple
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon 
        :class="classAssignment(this.title)"
        :name="icon" 
      />
    </q-item-section>
      
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    classAssignment(title) {
      return title.replace(/\s/g , "-").replace(/å|ä/g, 'a').replace(/ö/g, 'o').toLowerCase()
    }
  }
}
</script>

<style scoped>
  /*  
    Find a smarter way of doing this if possible. 
    Best case scenario: switch all icons for newly made ones with the same format, thus avoiding this problem alltogether.
  */
  /** Icon Placement **/
  .fas {
    padding-left: 3px;
  }
  /** Icon Sizing **/
  .aritklar {
    font-size: 1.25rem;
  }
  .redaktionsoversikten {
    font-size: 1.25rem;
  }
  .nyheter {
    font-size: 1.375rem;
  }
  .att-gora---it {
    font-size: 1.65rem;
  }
  .rapportera-en-bugg {
    font-size: 1.75rem;
  }
  .installningar {
    font-size: 1.375rem;
  }
</style>