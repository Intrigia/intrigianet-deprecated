<template>
  <q-card-actions>
    <q-btn flat round icon="event" />
    <q-item-label class="q-mr-md"> {{ deadline }} </q-item-label>

    <q-space></q-space>

    <q-btn 
      flat
      on-right
      color="primary"
      label="Redigera"
      @click="$router.push({path: `/editor/${route}`})"
    />
  </q-card-actions>
</template>

<script>
export default {
  props: ['deadline', 'title'],
  computed: {
    route() {
      return this.title.replace(/\s/g, '_')
    }
  }
}
</script>