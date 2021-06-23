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
    />
  </q-card-actions>
</template>

<script>
export default {
  props: ['deadline']
}
</script>