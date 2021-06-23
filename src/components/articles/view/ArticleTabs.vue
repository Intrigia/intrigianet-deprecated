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
    <!-- 
      Adding a v-for would remove repeating keywords like :ripple="" and name="", but it would also remove label
      Maybe make name an object?
     -->
    <q-tab v-for="tab in tabs" :key="tab.name" :name="tab.name" :label="tab.label" :ripple="false" />
  </q-tabs>
</template>

<script>
export default {
  props: ['tabs', 'selectedTab'], 
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