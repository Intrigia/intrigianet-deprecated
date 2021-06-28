<template>
  <q-page 
    class="bg-secondary"
    :class="{ 'q-pa-xl': this.windowWidth > 450, 'q-pa-md': this.windowWidth <= 450 }"
  >

    <WelcomeCard :user="user" />

    <div class="text-h4 q-mt-md q-mb-lg">Senaste nyheterna</div>

    <div class="latest-news row q-col-gutter-x-lg q-col-gutter-y-sm">
      <!-- NewsCard component that is looped (1) -->
      <NewsCard 
        v-for="(news, index) in newsArr"
        :key="news.title" 
        @openNews="openNews($event)"  
        :windowWidth="windowWidth" 
        :index="index" 
        :news="news" />
    </div>

    <!-- The modal that opens on news card click (2) -->
    <NewsModal :windowWidth="windowWidth" @newsClickedModal="clickEventModal()" :news="selectedNews" :open="newsModalOpen" />

  </q-page>
</template>

<script>
import WelcomeCard from 'components/news/WelcomeCard.vue'
import NewsCard from 'components/news/NewsCard.vue'
import NewsModal from 'components/news/NewsModal.vue'

export default {
  components: {
    WelcomeCard,
    NewsCard,
    NewsModal
  },
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
    openNews(index) {
      // Gets the index from the news card component (1) and puts the news, with corresponding index in newsArr, in selectedNews
      this.selectedNews = this.newsArr[index]
      // Tells the dialog component (2) that it should open
      this.newsModalOpen = true
    },
    clickEventModal() {
      this.newsModalOpen = false
    },
    // TODO find a way to make this global, or move the position of this method and its purpose to App.vue, but that impacts performance
    // A method for setting the data property windowWidth to window.innerWidth
    resizeHanlder() {
      this.windowWidth = window.innerWidth
    },
  },
  data() {
    return {
      windowWidth: null,
      newsModalOpen: false,
      selectedNews: {
        title: '',
        content: ''
      },
      user: 'Daniel Öhman',
      newsArr: [
        {
          title: 'Glada nyheter! Insikter är nu uppe och igång!',
          content: 'Nu har vi äntligen lagt till funktionen "insikter" som du nu kan se i menyn. Här kan du se all statistik om din(a) redaktion(er).',
          date: '2021-06-30',
          department: [
            {
              name: 'IT-avdelningen',
              color: 'primary',
            }
          ],
          author: {
            name: 'Daniel Öhman',
            roles: [
              'IT-chef',
              'Styrelseledamot'
            ]
          }
        },
        {
          title: 'Ny period. Ny kör vi järnet!',
          content: 'Nu är vi inne på period 3 2021 och jag vill bara säga: fantastiskt jobba allihopa!',
          date: '2021-06-28',
          department: [
            {
              name: 'Ledningen',
              color: 'purple',
            }
          ],
          author: {
            name: 'David Sandström',
            roles: [
              'Verkställande Direktör',
              'Styrelseledamot'
            ]
          }
        }
      ]
    }
  }
}
</script>


