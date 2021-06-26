<template>
  <div class="col-6">
<!--     <pre>
      <code>
        {{ news }}
      </code>
    </pre> -->
    <q-card class="news-card">

      <Header :news="news"/>

      <q-separator inset />

      <q-card-section class="body">
        <q-card-section>
          <div class="text-h5">
            {{ news.title }}
          </div>
          <br/>
          <p>
            {{ news.content.slice(0, 150) }}... <span class="text-primary"> Läs mer </span>
          </p>
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

<style scoped>
</style>

