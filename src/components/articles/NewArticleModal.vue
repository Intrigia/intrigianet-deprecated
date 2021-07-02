<template>
  <q-dialog v-model="promptModal" persistent>
    <q-card style="min-width: 350px; margin-top: -5%;" >
      <div class="row justify-end" >
        <q-btn class="align-right text-grey-6" unelevated round icon="close" @click="$emit('disablePrompt', false)"/>
      </div>

      <q-card-section>
        <div class="text-h6 text-center">Artikelförfrågan</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input v-model="title" label="Titel" />
      </q-card-section>

      <!-- TODO Add filtering for writing -->
      <q-card-section>
        <q-select
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

      <q-card-actions class="row text-primary">
        <div class="col-6 btn-col">
          <q-btn style="width: 100%" unelevated outline label="Skapa ett utkast" />
        </div>
        <div class="col-6 btn-col">
          <q-btn style="width: 100%" unelevated color="primary" label="Skicka in" />
        </div>
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
    promptModal: {
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
  .btn-col {
    padding: 6.5px
  }
</style>
