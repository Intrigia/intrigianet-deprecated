<template>
  <div class="q-ml-sm q-mt-sm">
    <q-chip outline color="primary" icon="inventory_2" >
      {{ status }}
    </q-chip>
  </div>
</template>

<script>
export default {
  props: ['status']
}
</script>
