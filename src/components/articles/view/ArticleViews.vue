<template>
  <q-tab-panels
    v-model="tabSelected"
    animated
  >
    <q-tab-panel v-for="tab in tabs" :key="tab.name" keep-alive class="q-pa-md row q-gutter-md" :name="tab.name">
      <!-- Looping through each article with the articles property with tab.name as the value or in other words: the selection name --> 
      <Article
        v-for="article in articles[tab.name]"
        :key="article.ID"
        v-bind="article"
      />
    </q-tab-panel>
  </q-tab-panels>
</template>

<script>
import Article from '../article/Article.vue'

export default {
  props: ['tab', 'tabs', 'articles'],
  components: { 
    Article, 
  },
  computed: {
    tabSelected: {
      get() {
        return this.tab
      }
    },

  },
  created() {
    console.log('---' + this.tab + '---')
  },
  watch: {
    tab: function() {
      console.log('---' + this.tab + '---')
    }
  },
  data() {
    return  {

    }
  },
}
</script>
