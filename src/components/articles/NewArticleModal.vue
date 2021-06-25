<template>
  <q-dialog v-model="promptModel" persistent>
    <q-card style="min-width: 350px; margin-top: -15%;" >
      <q-card-section>
        <div class="text-h6">Artikelförfrågan</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input v-model="title" label="Titel" />
      </q-card-section>

      <!-- TODO Add filtering for writing -->
      <q-card-section>
        <q-select
          filled
          v-model="chosenCategories"
          use-input
          input-debounce="0"
          label="Kategori(er)"
          multiple
          :options="categories"
        >
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey">
                No results
              </q-item-section>
            </q-item>
          </template>
        </q-select>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          v-model="desc"
          type="textarea"
          color="primary"
          label="Kortfattad besrkrivning av artikeln"
          maxlength="200"
          counter
        />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn flat label="Add address" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: ['prompt'],
  data() {
    return {
      title: '',
      chosenCategories: [],
      desc: '',
      categories: [
        'Filosofi',
        'Kemi'
      ]  
    }
  },
  computed: {
    promptModel: {
      get() {
        return this.prompt
      },
      set() {
        this.$emit('disablePrompt')
      }
    },
    descLength() {
      return this.desc.length.toString()
    }
  }
}
</script>

<style scoped>
  .q-textarea.q-field--labeled .q-field__native {
    padding-top: 5px
  }
</style>
