<template>
  <q-layout view="lHh Lpr fFf">
    <q-header 
      flat
      class="bg-white text-black"
      :class="[ pageTitle != 'Artiklar' ? 'shadow' : 'no-shadow' ]"
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
          v-if="leftDrawerOpen == false"
        />

        <q-toolbar-title>
          {{ pageTitle }}
          <!-- Make this a class conditional -->
          <q-btn
            color="primary" 
            label="Skapa ny artikel" 
            icon="add" 
            style="position: absolute; top: 12%; left: 150px"
            v-if="pageTitle == 'Artiklar' && leftDrawerOpen == false"
          />
          <q-btn
            color="primary" 
            label="Skapa ny artikel" 
            icon="add" 
            style="position: absolute; top: 12%; left: 100px"
            v-if="pageTitle == 'Artiklar' && leftDrawerOpen == true"
          />
        </q-toolbar-title>
        

        
        
<!-- Add this search bar after full version 2.0 -->
<!--         <q-input dark dense standout v-model="text" input-class="text-left" class="q-ml-md q-mr-md">
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
          </template>
        </q-input> -->
        <q-avatar>
          <img src="https://lh3.googleusercontent.com/a-/AOh14GhGGccuRGSZrNhUp8LL1eV42tojxPXKtKQqM-pn=s500-w500-h500-c-k">
        </q-avatar>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab v-for="(link, i) in essentialLinks" :key="i"
          :to="link.link"
          :label="link.title"
          :icon="link.icon" 
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      show-if-above
      bordered
      content-class="bg-dark"
    >

      <q-btn
        flat
        dense
        round
        color="white"
        icon="menu_open"
        aria-label="Menu"
        @click="leftDrawerOpen = !leftDrawerOpen"
        v-if="leftDrawerOpen == true"
        style="position: absolute; right: 15px; top: 8px; "
      />

      <q-list
        dark
      >
        <q-item-label
          header
          class="text-primary"
        >
          Intrigianet <span class="text-white">| {{ editorialOffice }}</span>
        </q-item-label>
          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          />

        <q-separator color="primary" inset />

        <q-item-label
          header
          class="text-white"
        >
          Funktioner som implementeras inom kort:
        </q-item-label>

        <q-separator color="primary" inset />

        <q-item v-for="(disabledLink, i) in disabledLinks" :key="i">
          <q-item-section
            v-if="disabledLink.icon"
            avatar
            disabled
          >
            <q-icon :name="disabledLink.icon" />
          </q-item-section>
            
          <q-item-section
            disabled  
          >
            <q-item-label>{{ disabledLink.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <q-separator color="primary" inset />

      <q-item-label
          header
          class="text-white"
        >
          Kontakta it@intrigia.se om du har frågor
      </q-item-label>


      <p class="absolute-bottom text-weight-thin text-white" style="text-align: center" >Intrigianet V.1.0 ALPHA</p>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Artiklar',
    icon: 'fas fa-file-alt',
    link: '/artiklar'
  },
  {
    title: 'Redaktionsöversikten',
    icon: 'fas fa-project-diagram',
    link: '/redaktionsöversikten'
  },
  {
    title: 'Nyheter',
    icon: 'fas fa-newspaper',
    link: '/nyheter'
  },
  {
    title: 'Rapportera en bugg',
    icon: 'bug_report',
    link: '/rapportera'
  },
  {
    title: 'Inställningar',
    icon: 'fas fa-cog',
    link: '/inställningar'
  },
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      editorialOffice: 'Intresso',
      text: '',
      disabledLinks: [
        {
          title: 'Insikter',
          icon: 'insights',
          link: '/insikter'
        },
        {
          title: 'Chatt',
          icon: 'fas fa-comment-dots',
          link: '/chatt'
        },
        {
          title: 'Att göra - IT',
          icon: 'pending_actions',
          link: '/it-todo'
        },
      ]
    }
  },
  computed: {
    pageTitle() {
      var path = this.$route.path
      var firstLetter = path.slice(1, 2).toUpperCase()
      var rest = path.slice(2)
      return  firstLetter + rest
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 767px) {
  .q-footer {
    display: none;
  }
}
</style>