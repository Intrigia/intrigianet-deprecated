<template>
  <div class="col-6" @click="openNews()" >
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
            {{ news.content.slice(0, 150) }}... <span class="text-primary read-more"> Läs mer </span>
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
  props: ['news', 'index'],
  methods: {
    openNews() {
      this.$emit('openNews', this.index)
    }
  }
}
</script>

<style scoped>
  .news-card {
    cursor: pointer;
  }
  .read-more:hover {
    color: #ffcb77 !important;
    transition: all 0.3s ease-in-out;
  }
</style>

