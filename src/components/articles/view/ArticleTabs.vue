<template>
  <!-- This is the quasar container for the tabs -->
  <q-tabs 
    v-model="selected"
    align="left"
    class="bg-white text-grey-8"
    active-color="primary"
    no-caps
    narrow-indicator
  >
    <!-- These are the individual tabs -->
    <q-tab name="all_articles" label="Alla artiklar" :ripple="false" />
    <q-tab name="unsent_articles" label="Utkast" :ripple="false" />
    <q-tab name="pipeline_articles" label="Inskickade artiklar" alert="primary" :ripple="false" />
    <q-tab name="published_articles" label="Publicerade artiklar" :ripple="false" />
  </q-tabs>
</template>

<script>
export default {
  props: ['tab'], 
  /* 
  This gets and returns the value of the prop for the v-model at (1). 
  Then it returns the v-model value from the tabs to the parent component at (2)
  */
  computed: {
    selected: {
      get() { // (1)
        return this.tab
      },
      set(val) { // (2)
        this.$emit('changeTab', val)
      }
    }
  }
}
</script>

<style scoped>
body.desktop .q-focusable:focus > .q-focus-helper, body.desktop .q-manual-focusable--focused > .q-focus-helper, body.desktop .q-hoverable:hover > .q-focus-helper {
  opacity: 0 !important;
  background: none !important;
}
</style>