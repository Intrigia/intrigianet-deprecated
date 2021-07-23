<template>
  <!-- 

    How to use this component:
    - import component
    - pass the prop "date" with the date
    - create a custom event newDate that uses a method `newDate($event) { this.date = $event }`
    - create a method in methods that will change the date to the new one: 
      newDate(date) {
        this.date = date
      } 
  -->
  <q-popup-proxy transition-show="scale" transition-hide="scale">
    <q-card>
      <div class="row">
        <div class="date-radius">
          <q-date flat v-model="localDate" mask="YYYY-MM-DD HH:mm" />
        </div>
        <div class="time-radius">
          <q-time flat v-model="localDate" mask="YYYY-MM-DD HH:mm" format24h />
        </div>
      </div>
      <div class="row items-center q-pb-sm q-pr-xs justify-end">
        <q-btn v-close-popup label="Avbryt" color="grey-6" flat />
        <q-btn @click="newDate" v-close-popup label="Ändra" color="primary" flat />
      </div>
    </q-card>
  </q-popup-proxy>
</template>

<script>
export default {
  props: ['date'],
  data() {
    return { 
      localDate: '',
      options: [

      ]
    }
  },
  methods: {
    newDate() {
      this.$emit('newDate', this.localDate)
    }
  }
}
</script>

<style scoped>
  .time-radius * {
    border-top-left-radius: 0px !important;
  } 
  .date-radius * {
    border-top-right-radius: 0px !important;
  }
</style>