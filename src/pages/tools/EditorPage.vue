<template>
  <div id="container">
    <!-- Because of the data flow this needs to be in the page instead of the layout, vuex is unecessary for this -->
    <q-header class="q-pl-xs q-pt-sm q-pb-sm bg-white row text-black shadow">
      <q-toolbar class="col">
        <q-toolbar-title>
          <q-avatar>
            <img src="https://firebasestorage.googleapis.com/v0/b/intrigia-11f05.appspot.com/o/icon.png?alt=media&token=fa660e60-d88d-4606-9047-19b4e3887a2f" alt="">
          </q-avatar>
          {{ article.title }}
        </q-toolbar-title>
      </q-toolbar>

      <q-toolbar class="col">
        <q-select
          class="full-width"
          v-model="chosenCategories"
          multiple
          use-chips
          :options="categories"
          filled
          clearable
          label="Kategori(er)"
        />
      </q-toolbar>

      <q-toolbar class="col-4 justify-end">
        <!-- Preview button -->
        <q-btn color="grey-8" label="Förhandsgranska" />
        <!-- Status change button -->
        <q-btn class="q-ml-md q-mr-xs" color="primary" v-if="disableStatusBtn" :label="label" />
        <!-- Status change button disabled -->
        <q-btn class="q-ml-md q-mr-xs" disable color="primary" v-if="!disableStatusBtn" :label="label" />
      </q-toolbar>
    </q-header>

    <Editor :ID="ID" @titleChange="titleChange($event)" :article="article" />
  </div>
</template>

<script>
// Vuex Store Articles
import { mapGetters, mapActions } from 'vuex'

// Component Editor
import Editor from 'components/tools/editor/Editor.vue'

export default {
  components: {
    Editor
  },
  beforeMount() {
    this.ID = this.$route.path.slice(7, this.$route.path.length).split('/')[1]
    this.article = this.articles[this.ID]
  },
  data() {
    return {
      ID: '',
      article: null,
      categories: ['Ekonomi', 'Entreprenörskap'],
      chosenCategories: [],
    }
  },
  methods: {
    ...mapActions('articles', ['updateCategories']),
    titleChange(title) {
      this.title = title
    },
  },
  computed: {
    ...mapGetters('articles', ['articles']),
    label() {
      console.log(this.article.class)
      console.log(this.article.status)
      if (this.article.status === 'Utkast' || this.article.status === 'Avslagen') {
        return 'Skicka förfrågan'
      } else if (this.article.status === 'Förfrågan skickad') {
        return 'Förfrågan skickad'
      } else if (this.article.status === 'Beviljad' || this.article.status === 'Granskad') {
        return 'Skicka in för granskning'
      } else if (this.article.status === 'Granskas') {
        return 'Artikeln granskas'
      } else if (this.article.status === 'Redo för publicering' || this.article.status === 'Publicerad') {
        return 'Spara ändringar'
      } 
      return 'Some label name'
    },
    disableStatusBtn() {
      if (
        this.article.status === 'Förfrågan skickad' 
        || 
        this.article.status === 'Granskas'

      ) {
        return false
      } else {
        return true
      }
    }
  },
  watch: {
    chosenCategories: {
      handler(val) {
        var categoriesObj = {}
        if (val != null) {
          val.forEach((category, i) => {
            categoriesObj[i] = val[i]
          })
        }
        this.updateCategories({ ID: this.ID, categories: categoriesObj })
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
