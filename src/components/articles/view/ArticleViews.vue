<template>
  <!-- Tab Panels (1) -->
  <q-tab-panels
    v-model="tabSelected"
    animated
  >
    <q-tab-panel v-for="tab in tabs" :key="tab.name" keep-alive class="tab" :name="tab.name">
      <div class="row q-col-gutter-x-md q-col-gutter-y-md">
        <!-- Looping through each article with the articles property with tab as the value or in other words: the selection name --> 
        <div class="col-lg-4 col-md-6 col-sm-12 col-12" v-for="(article, key) in sortedArticles" :key="key">
          <Article :ID="key" v-bind="article" />
        </div>
      </div>
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
    /* 
      The use of get() here is becuase the tab panels (1) use v-model, therefore it would mutate
      the value of the tab property if it was not passed like this.
    */
    tabSelected: {
      get() {
        return this.tab
      }
    },
    sortedArticles() { 
      var sortedArticlesObj = {}
      // Checks whether the tab is all articles or not
      if (this.tab != 'all_articles') {
        // Grabs all the keys from the articles object
        Object.keys(this.articles).forEach(article => {
          // Checks whether the tab is the same as the class
          if (this.articles[article].class === this.tab) {
            // Adds the article with class === tab to the sortedArticlesObj
            Object.assign(sortedArticlesObj, { [article]: this.articles[article] })
          }
        })
      } else {
        // Returns the articles object when the tab is all articles
        return this.articles
      }
      return sortedArticlesObj
    }
  },
}
</script>
