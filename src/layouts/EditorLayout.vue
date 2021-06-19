<template>
  <q-layout>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Editor from 'src/pages/tools/Editor.vue'

export default {
  components: { Editor }
}
</script>
