<template>
  <q-expansion-item
    v-model="sourcesExpanded"
    icon="source"
    label="Källförteckning"
    caption="Clicka för att se och ändra dina källor"
  >
    <div class="q-pl-lg">
      <q-list >
        <q-expansion-item
          icon="link"
          label="B. K. Kiraly, P. Pastor, A. A. Nofi,. ‘Revolutions and Interventions in Hungary and its Neighbor States, 1918-1919’,. Atlantic Studies on Societies in Change,. sida 31-55"
          header-class="text-grey-8"
        >
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-separator/>
      </q-list>
    </div>
  </q-expansion-item>
</template>

<script>
export default {
  props: ['sources']
}
</script>

