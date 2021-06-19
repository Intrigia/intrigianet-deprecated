<template>
  <h1> {{ articleTitle }} </h1>
</template>

<script>
export default {
  computed: {
    articleTitle() {
      var path = this.$route.path.slice(7, -19)
      var firstLetter = path.slice(1, 2).toUpperCase()
      var rest = path.slice(2)
      return  firstLetter + rest
    }
  }
}
</script>
