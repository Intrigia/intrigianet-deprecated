<template>
  <q-tab-panels
    v-model="tabSelected"
    animated
  >
    
    <q-tab-panel keep-alive class="q-pa-md row q-gutter-md" name="all_articles">
      <Article 
        v-for="article in articles"
        :key="article.ID"
        v-bind="article"
      />
    </q-tab-panel>
    <q-tab-panel keep-alive class="q-pa-md row q-gutter-md" name="unsent_articles">
      <Article 
        v-for="article in drafts"
        :key="article.ID"
        v-bind="article"
      />
    </q-tab-panel>
    <q-tab-panel keep-alive class="q-pa-md row q-gutter-md" name="reviewed_articles">
      <Article 
        v-for="article in reviewing_pipeline"
        :key="article.ID"
        v-bind="article"
      />
    </q-tab-panel>
    <q-tab-panel keep-alive class="q-pa-md row q-gutter-md" name="published_articles">
      <Article 
        v-for="article in published"
        :key="article.ID"
        v-bind="article"
      />
    </q-tab-panel>
  </q-tab-panels> <!-- New component -->
</template>

<script>
import TabPanel from './views_components/ArticleTabPanel.vue'
import Article from '../article/Article.vue'

export default {
  props: ['tab'],
  components: { 
    Article, 
    TabPanel
  },
  data() {
    return  {
      articles: [
        {
          ID: 1,
          title: 'Some long article title',
          desc: 'Some description',
          deadline: 'Mon 21 Jun 18:30',
          status: 'Granskas',
        },
        {
          ID: 2,
          title: 'Some long article title',
          desc: 'Some description',
          deadline: 'Mon 21 Jun 18:30',
          status: 'Granskas',
        },
        {
          ID: 3,
          title: 'Some long article title',
          desc: 'Some description',
          deadline: 'Mon 21 Jun 18:30',
          status: 'Utkast',
        },
        {
          ID: 4,
          title: 'Some long article title',
          desc: 'Some description',
          deadline: 'Mon 21 Jun 18:30',
          status: 'Publicerad',
        }
      ],
      drafts: [
        {
          ID: 1,
          title: 'Some long article title',
          desc: 'Some description',
          deadline: 'Mon 21 Jun 18:30',
          status: 'Utkast',
        },
        {
          ID: 2,
          title: 'Some long article title',
          desc: 'Some description',
          deadline: 'Mon 21 Jun 18:30',
          status: 'Förfrågan skickad',
        },
        {
          ID: 3,
          title: 'Some long article title',
          desc: 'Some description',
          deadline: 'Mon 21 Jun 18:30',
          status: 'Beviljad',
        },
        {
          ID: 4,
          title: 'Some long article title',
          desc: 'Some description',
          deadline: 'Mon 21 Jun 18:30',
          status: 'Avslagen',
        }
      ],
      reviewing_pipeline: [
        {
          ID: 1,
          title: 'Some long article title',
          desc: 'Some description',
          deadline: 'Mon 21 Jun 18:30',
          status: 'Granskas',
        },
        {
          ID: 2,
          title: 'Some long article title',
          desc: 'Some description',
          deadline: 'Mon 21 Jun 18:30',
          status: 'Granskad',
        },
        {
          ID: 3,
          title: 'Some long article title',
          desc: 'Some description',
          deadline: 'Mon 21 Jun 18:30',
          status: 'Granskas',
        },
        {
          ID: 4,
          title: 'Some long article title',
          desc: 'Some description',
          deadline: 'Mon 21 Jun 18:30',
          status: 'Granskas',
        }
      ],
      published: [
        {
          ID: 1,
          title: 'Some long article title',
          desc: 'Some description',
          deadline: 'Mon 21 Jun 18:30',
          status: 'Redo för publicering',
        },
        {
          ID: 2,
          title: 'Some long article title',
          desc: 'Some description',
          deadline: 'Mon 21 Jun 18:30',
          status: 'Publicerad',
        },
        {
          ID: 3,
          title: 'Some long article title',
          desc: 'Some description',
          deadline: 'Mon 21 Jun 18:30',
          status: 'Publicerad',
        },
        {
          ID: 4,
          title: 'Some long article title',
          desc: 'Some description',
          deadline: 'Mon 21 Jun 18:30',
          status: 'Publicerad',
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
