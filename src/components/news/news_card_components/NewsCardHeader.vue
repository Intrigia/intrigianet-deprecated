<template>
  <div class="row">
    <q-item class="col">
      <q-item-section avatar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label> {{news.author.name}} </q-item-label>
        <q-item-label caption>
          <!-- Looping through the user roles -->
          <span v-for="(role, i) in news.author.roles" :key="i"> 
            {{ role }} 
            <!-- Excluding the last "-" from the for loop -->
            <span v-if="i != news.author.roles.length - 1"> - </span>
          </span>
        </q-item-label>
      </q-item-section>
    </q-item>
    <q-item class="col-md-4" :class="{ 'col-12': this.windowWidth <= 540 }">
      <q-item-section>
        <div :class="{'chip-container-row': this.windowWidth <= 540, 'chip-container-column': this.windowWidth > 540}">
          <q-chip 
            v-for="department in news.department" 
            :key="department.name" 
            class="department-chip" 
            :color="department.color" 
            text-color="white" 
            icon="group"
          >
            {{ department.name }}
          </q-chip>
  <!--               <q-chip class="department-chip" color="orange" text-color="white" icon="engineering">
            IT-avdelningen
          </q-chip>
          <q-chip class="department-chip" color="intresso" text-color="white" icon="history_edu">
            Intresso
          </q-chip>
          <q-chip class="department-chip" color="blue" text-color="white" icon="history_edu">
            Revenuir
          </q-chip>
          <q-chip class="department-chip" color="green" text-color="white" icon="history_edu">
            Partikular
          </q-chip> -->
        </div>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  props: ['news', 'windowWidth'],
}
</script>

<style scoped>
  .chip-container-column {
    width: 100%;
    text-align: right !important;
  }
  .chip-container-row {
    width: 100%;
    text-align: left !important;
  }
</style>
