<template>
  <q-tab-panels
    v-model="tabSelected"
    animated
  >
    <q-tab-panel v-for="tab in tabs" :key="tab.name" keep-alive class="tab" :name="tab.name">
      <div class="row q-col-gutter-x-md q-col-gutter-y-md">
        <!-- Looping through each article with the articles property with tab.name as the value or in other words: the selection name --> 
        <div class="col-lg-4 col-md-6 col-sm-12 col-12" v-for="article in articles[tab.name]" :key="article.ID">
          <Article v-bind="article" />
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
    tabSelected: {
      get() {
        return this.tab
      }
    },

  },
/*   created() {
    console.log('---' + this.tab + '---')
  },
  watch: {
    tab: function() {
      console.log('---' + this.tab + '---')
    }
  }, */
}
</script>
