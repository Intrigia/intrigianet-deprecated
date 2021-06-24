<template>
  <div class="col-6">
    <pre>
      <code>
        {{ news }}
      </code>
    </pre>
    <q-card class="news-card">

      <Header :news="news"/>

      <q-separator inset />

      <q-card-section>
        <q-card-section>
          {{ news.title }}
          <br/>
          {{ news.content }}
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import Header from 'components/news/news_card_components/NewsCardHeader.vue'

export default {
  components: {
    Header,
  },
  props: ['news'],
  computed: {
  }
}
</script>
