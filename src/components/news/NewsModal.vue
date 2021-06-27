<template>
  <q-dialog v-model="openProp">
    <q-card style="margin-top: -5%;">
      <Header :news="news"/>

      <q-separator inset />

      <q-card-section style="max-height: 50vh" class="scroll">
        <div class="text-h5">
          {{ news.title }}
        </div>
        <br/>
        <p>
          {{ news.content }}
        </p>
      </q-card-section>

      <q-separator inset />

      <q-card-actions align="right">
        <q-btn flat label="Stäng" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import Header from 'components/news/news_card_components/NewsCardHeader.vue'

export default {
  props: ['open', 'news'],
  components: {
    Header
  },
  computed: {
    openProp: {
      get() {
        return this.open
      },
      set() {
        this.$emit('newsClickedModal', '')
      } 
    }
  }
}
</script>
