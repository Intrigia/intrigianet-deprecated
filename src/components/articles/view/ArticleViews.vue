<template>
  <q-tab-panels
    v-model="tabSelected"
    animated
  >
    <q-tab-panel name="all_articles">
      <h3>Alla artiklar</h3>
    </q-tab-panel>
    <q-tab-panel name="unsent_articles">
      <h3>Dina utkast</h3>
    </q-tab-panel>
    <q-tab-panel name="pipeline_articles">
      <h3>Inskickade artiklar</h3>
    </q-tab-panel>
    <q-tab-panel name="published_articles">
      <h3>Publicerade artiklar</h3>
    </q-tab-panel>
  </q-tab-panels> <!-- New component -->
</template>

<script>
export default {
  props: ['tab'],
  computed: {
    tabSelected: {
      get() {
        return this.tab
      }
    }
  }
}
</script>
