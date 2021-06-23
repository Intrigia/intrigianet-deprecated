<template>
  <q-tab-panels
    v-model="tabSelected"
    animated
  >
    <q-tab-panel v-for="tab in tabs" :key="tab.name" keep-alive class="q-pa-md row q-gutter-md" :name="tab.name">
      <Article 
        v-for="article in articles[tab.name]"
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
  props: ['tab', 'tabs'],
  components: { 
    Article, 
    TabPanel
  },
  computed: {
    tabSelected: {
      get() {
        console.log(this.tab.name)
        console.log(this.tab.name)
        return this.tab
      }
    },

  },
  data() {
    return  {
      articles: {
        all_articles: [
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
        unsent_articles: [
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
        reviewed_articles: [
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
        published_articles: [
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
    }
  },
}
</script>
