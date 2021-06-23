<template>
  <q-tab-panel keep-alive class="q-pa-md row q-gutter-md" :name="tab.name">
    <h1> {{ tab.name }} </h1>
<!--     <Article 
      v-for="article in articles"
      :key="article.ID"
      v-bind="article"
    /> -->
  </q-tab-panel>
</template>

<script>
import Article from 'components/articles/article/Article.vue'

export default {
  component: { Article },
  props: ['tab'],
  computed: {
    articleSelection() {
      if (this.tab.label == 'Alla artiklar') {
        return this.articles
      } else if (this.tab.label == 'Utkast') {
        return this.drafts
      } else if (this.tab.label == 'Inskickade artiklar') {
        return this.reviewing_pipeline
      } else if (this.tab.label == 'Publicerade artiklar') {
        return this.published
      } else {
        return []
      }
    }
  },
  data() {
    return {
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
  }
}
</script>