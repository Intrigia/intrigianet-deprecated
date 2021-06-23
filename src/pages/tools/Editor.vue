<template>
  <div>
    <h1> {{ articleTitle }} </h1>
    <Editor />
  </div>
</template>

<script>
import Editor from 'components/tools/editor/Editor.vue'

export default {
  components: {
    Editor
  },
  computed: {
    articleTitle() {
      var path = this.$route.path.replace(/_/g, ' ').slice(7, this.$route.path.length)
      var firstLetter = path.slice(1, 2).toUpperCase()
      var rest = path.slice(2)
      return  firstLetter + rest
    }
  }
}
</script>