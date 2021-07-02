<template>
  <div id="container">
    <!-- Because of the data flow this needs to be in the page instead of the layout, vuex is unecessary for this -->
    <q-header class="q-pl-xl q-pt-sm q-pb-sm bg-white row text-black shadow">
      <q-toolbar class="col-3">
        <q-toolbar-title>
          <q-avatar>
            <img src="../../../public/icons/icon.png" alt="">
          </q-avatar>
          {{ title }}
        </q-toolbar-title>
      </q-toolbar>

      <q-toolbar class="col-6">
        Some categories
      </q-toolbar>

      <q-toolbar class="col-3">
        Actions
      </q-toolbar>
    </q-header>

    <Editor @titleChange="titleChange($event)" :title="articleTitle" />
  </div>
</template>

<script>
import Editor from 'components/tools/editor/Editor.vue'

export default {
  components: {
    Editor
  },
  beforeMount() {
    var path = this.$route.path.replace(/_/g, ' ').slice(7, this.$route.path.length)
    var firstLetter = path.slice(1, 2).toUpperCase()
    var rest = path.slice(2)
    this.title = firstLetter + rest
  },
  data() {
    return {
      title: ''
    }
  },
  methods: {
    titleChange(title) {
      this.title = title
    },
  },
  computed: {
    articleTitle() {
      if ( this.title.length > 0 ) {
        return this.title
      }
    }
  }
}
</script>

<style scoped>
  #container {
    display: grid;
    justify-items: center;
  }
</style>
