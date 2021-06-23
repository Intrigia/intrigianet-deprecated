<template>
  <q-card-section class="body q-pt-xs">
    <div class="text-h5 q-mt-sm q-mb-xs"> {{ title }} </div>
    <div class="text-caption text-grey-8"> {{ desc }} </div>
  </q-card-section>
</template>

<script>
export default {
  props: ['title', 'desc']
}
</script>