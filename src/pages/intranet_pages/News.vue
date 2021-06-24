<template>
  <q-page class="bg-secondary q-pa-xl">

    <WelcomeCard :user="user" />

    <div class="text-h4 q-mt-md q-mb-lg">Senaste nyheterna</div>

    <div class="latest-news row q-col-gutter-x-lg q-col-gutter-y-sm">
      <NewsCard v-for="news in newsArr" :key="news.title" :news="news" />
    </div>

  </q-page>
</template>

<script>
import WelcomeCard from 'components/news/WelcomeCard.vue'
import NewsCard from 'components/news/NewsCard.vue'

export default {
  components: {
    WelcomeCard,
    NewsCard
  },
  data() {
    return {
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


