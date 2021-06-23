<template>
  <div class="q-ml-sm q-mt-sm">
    <q-chip outline color="primary" :icon="dynamicIcons" >
      {{ status }}
    </q-chip>
  </div>
</template>

<script>
export default {
  props: ['status'],
  computed: {
    dynamicIcons() {
      if (this.status == 'Förfrågan skickad') {
        return 'send'
      } else if (this.status == 'Beviljad') {
        return 'thumb_up_alt'
      } else if (this.status == 'Avslagen') {
        return 'thumb_down_alt'
      } else if (this.status == 'Utkast') {
        return 'description'
      } else if (this.status == 'Granskas') {
        return 'pending_actions'
      } else if (this.status == 'Granskad') {
        return 'receipt_long'
      } else if (this.status == 'Redo för publicering') {
        return 'flight_takeoff'
      } else if (this.status == 'Publicerad') {
        return 'file_download_done'
      } else {
        return 'warning'
      }
    }
  }
/*   computed: {
    statusColor() {
      if (this.status == 'Utkast') {
        return 'grey-8'
      } else if (this.status == 'Granskas') {
        return 'amber-5'
      } else if (this.status == 'Granskad') {
        return 'orange-5'
      } else if (this.status == 'Redo för publicering') {
        return 'teal-13'
      } else if (this.status == "Publicerad") {
        return 'green-12'
      } else {
        return 'grey-8'
      }
    }
  } */
}
</script>
