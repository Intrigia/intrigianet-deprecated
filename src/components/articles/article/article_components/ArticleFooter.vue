<template>
  <q-card-actions>
    <q-btn flat round icon="event">
      <DeadlinePicker :ID="ID" :date="date" @newDate="newDate($event)" />
    </q-btn>

    <q-item-label class="q-mr-md"> {{ deadline }} </q-item-label>

    <q-space></q-space>

    <q-btn 
      flat
      on-right
      color="primary"
      label="Redigera"
      @click="$router.push({path: `/editor/${ID}`})"
    />
  </q-card-actions>
</template>

<script>
import DeadlinePicker from 'components/DeadlinePicker.vue'

export default {
  props: ['ID', 'deadline', 'title'],
  components: { DeadlinePicker },
  data() {
    return { 
      date: null,
    }
  },
  created() {
    this.date = this.deadline
  },
  methods: {
    parsedDate(date, options) { 
      if (date.length < 1 ) {
        return 'Inget publiceringsdatum'
      }
      if (typeof(this.date) != 'string') { 
        var parsed = new Intl.DateTimeFormat('sv-SE', options).format(date)
      } else if(typeof(this.date) != 'object') {
        var unParsedDate = Date.parse(date)
        var parsed = new Intl.DateTimeFormat('sv-SE', options).format(unParsedDate)
      } else {
        return false
      }
      parsed = parsed.toString()
      parsed = parsed[0].toUpperCase() + parsed.slice(1, parsed.length)
      return parsed
    },
    newDate(date) {
      // TODO update vuex state for this article 
      this.date = date
    }
  },
  computed: {
    route() {
      return this.title.replace(/\s/g, '_')
    },
    /* TODO
    Make these formats for the output of deadlineFormatted custom for each period:
    (Period, Format)
    Year difference => Weekday + Day number + ":e" or ":a" depending on number != 1 or 2 + Month + Year
    => i.e. Måndag 20:e mars 2022
    Same year with month difference => Weekday + Day number + Month + ", om " 
                                       + difference between today.getMonth() and const month + " månader"
    => i.e. Måndag 21:a maj, om 2 månader
    Same year, same month, with day difference => Weekday + const day + ":e" or ":a" depending on number != 1 or 2 
                                                  + ", om " + difference between today.getDay() and const day + " dagar"
    => i.e. Måndag 20:e, om 6 dagar
    Same year, same month, with day difference == 1 => "Imorgon klockan " + const hours in format 00:00
                                                       + ", om " + difference in date.getHours() and today.getHours()
                                                       + " h"
    => i.e. Imorgon klockan 08:00, om 28h
    Same year, same month, same day, with hour difference < 24 and != 1 => "Idag klockan " + const hours in format 00:00
                                                                  + ", om " + difference in date.getHours() and today.getHours()
                                                                  + " h"
    => i.e. Idag klockan 08:00, om 4h
    Same year, same month, same day, with minute difference <= 60 and > 1 => "Idag klockan " + const hours in format 00:00
                                                                             + ", om "
                                                                             + difference in date.getMinutes() and today.getMinutes()
                                                                             + " min"
    => i.e. Idag klockan 08:00, om 23 min
    Add further formats for past today date
    */
    deadlineFormatted() {
/*         const today = new Date()

        const year = this.deadline.getFullYear(),
              month = this.deadline.getMonth(),
              day = this.deadline.getDay(),
              hours = this.deadline.getHours(),
              minutes = this.deadline.getMinutes(),
              seconds = this.deadline.getSeconds()

        if (year - today.getFullYear() > 0) { // (2)
          // Change day type to :e och :a https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts
          const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'  }
          this.parsedDate(this.deadline, options)
          console.log(this.parsedDate(this.deadline, options))
          return this.parsedDate(this.deadline, options)
        } */
        // Remove this after the conditionals at (2)
      const options = { 
        weekday: 'long', year: 'numeric', month: 'short', day: 'numeric',
        hour: 'numeric', minute: 'numeric'
      }
      console.log(this.parsedDate(this.date, options))
      return this.parsedDate(this.date, options)
    }
  }
}
</script>