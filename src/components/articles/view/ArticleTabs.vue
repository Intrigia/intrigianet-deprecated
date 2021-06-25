<template>
  <!-- This is the quasar container for the tabs (1) -->
  <q-tabs 
    v-model="selected"
    align="left"
    class="bg-white shadow text-grey-8"
    active-color="primary"
    no-caps
    narrow-indicator
  >
    <!-- These are the individual tabs (2) looped through the tabs prop. Current tab is selected by the selectedTab v-model at (1) -->
    <q-tab v-for="tab in tabs" :key="tab.name" :name="tab.name" :label="tab.label" :ripple="false" />

    <q-space />

    <q-btn
      class="q-mr-md"
      color="primary" 
      label="Skapa ny artikel" 
      icon="add"
      v-if="windowWidth > 690"
    />
  </q-tabs>
</template>

<script>
export default {
  props: ['tabs', 'selectedTab', 'windowWidth'], 
  /* 
  This gets and returns the value of the prop for the v-model at (1). 
  Then it returns the v-model value from the tabs to the parent component at (2)
  */
  computed: {
    selected: {
      get() { // (1)
        return this.selectedTab
      },
      set(val) { // (2)
        this.$emit('changeTab', val)
      }
    }
  }
}
</script>