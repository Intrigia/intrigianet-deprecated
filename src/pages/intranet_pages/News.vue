<template>
  <q-page class="bg-secondary q-pa-xl">

    <WelcomeCard :user="user" />

    <div class="text-h4 q-mt-md q-mb-lg">Senaste nyheterna</div>

    {{ newsModalOpen }}
    {{ selectedArticle }}

    <div class="latest-news row q-col-gutter-x-lg q-col-gutter-y-sm">
      <!-- NewsCard component that is looped (1) -->
      <NewsCard v-for="(news, index) in newsArr" @openNews="openNews($event)" :key="news.title" :index="index" :news="news" />
    </div>

    <!-- The modal that opens on news card click (2) -->
    <NewsModal @newsClickedModal="clickEventModal()" :news="selectedNews" :open="newsModalOpen" />

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
  methods: {
    openNews(index) {
      // Gets the index from the news card component (1) and puts the news, with corresponding index in newsArr, in selectedNews
      this.selectedNews = this.newsArr[index]
      // Tells the dialog component (2) that it should open
      this.newsModalOpen = true
    },
    clickEventModal() {
      this.newsModalOpen = false
    }
  },
  data() {
    return {
      newsModalOpen: false,
      selectedArticle: {},
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


