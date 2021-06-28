<template>
  <div class="col-lg-6 col-md-12 col-sm-12 card-container" @click="openNews()" >
<!--     <pre>
      <code>
        {{ news }}
      </code>
    </pre> -->
    <q-card class="news-card">

      <Header :windowWidth="windowWidth" :news="news"/>

      <q-separator inset />

      <q-card-section class="body">
        <q-card-section>
          <div class="text-h5">
            {{ news.title }}
          </div>
          <br/>
          <p class="paragraph">
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
  props: ['news', 'index', 'windowWidth'],
  created() {
		/* 
		Adding eventListener for window width for the custom css and v-if statement 
		for tabs (1) and tab pages (2)
		*/
		window.addEventListener('resize', this.resizeHanlder)
		this.resizeHanlder()
  },
  destroyed() {
    window.addEventListener('resize', this.resizeHanlder)
  },
  methods: {
    // TODO find a way to make this global, or move the position of this method and its purpose to App.vue, but that impacts performance
    // A method for setting the data property windowWidth to window.innerWidth
    resizeHanlder() {
      this.windowWidth = window.innerWidth
    },
    openNews() {
      this.$emit('openNews', this.index)
    }
  }
}
</script>

<style scoped>
  .news-card {
    cursor: pointer;
    width: 100% !important;
  }
  .read-more:hover {
    color: #ffcb77 !important;
    transition: all 0.3s ease-in-out;
  }
  .text-h5 {
    min-height: 50px;
  }
  .paragraph {
    min-height: 20px;
  }
</style>

