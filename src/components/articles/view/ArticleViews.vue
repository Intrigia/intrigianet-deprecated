<template>
  <q-tab-panels
    v-model="tabSelected"
    animated
  >
    <q-tab-panel class="q-pa-md row q-gutter-md" name="all_articles">
      <Article 
        v-for="article in articles"
        :key="article.ID"
        v-bind="article"
      />
    </q-tab-panel>
    <q-tab-panel name="unsent_articles">
      <h3>Dina utkast</h3>
    </q-tab-panel>
    <q-tab-panel name="pipeline_articles">
      <h3>Inskickade artiklar</h3>
    </q-tab-panel>
    <q-tab-panel name="published_articles">
      <h3>Publicerade artiklar</h3>
    </q-tab-panel>
  </q-tab-panels> <!-- New component -->
</template>

<script>
import Article from '../article/Article.vue'

export default {
  props: ['tab'],
  components: { Article },
  data() {
    return  {
      articles: [
        {
          ID: 1,
          title: 'Some long article title',
          desc: 'Some description',
          deadline: 'Mon 21 Jun 18:30',
          status: 'Inte inskickad förfrågan',
        },
        {
          ID: 2,
          title: 'Some long article title',
          desc: 'Some description',
          deadline: 'Mon 21 Jun 18:30',
          status: 'Inte inskickad förfrågan',
        },
        {
          ID: 3,
          title: 'Some long article title',
          desc: 'Some description',
          deadline: 'Mon 21 Jun 18:30',
          status: 'Inte inskickad förfrågan',
        },
        {
          ID: 4,
          title: 'Some long article title',
          desc: 'Some description',
          deadline: 'Mon 21 Jun 18:30',
          status: 'Inte inskickad förfrågan',
        }
      ]
    }
  },
  computed: {
    tabSelected: {
      get() {
        return this.tab
      }
    }
  }
}
</script>
