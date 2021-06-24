<template>
  <div class="welcome-section q-pb-lg">
    <q-card class="welcome-card">
      <q-card-section class="welcome-card-body row">
        <div class="welcome-card-text column col-md-7">
          <div class="welcome-card-centering q-pa-xl">
            <div class="text-h4 welcome-title">Hej, <span class="user-name text-primary">{{ user }}</span></div>
            <div class="text-subtitle1 text-grey-8">
              Här kan du se det senaste i nyhetsflödet för din redaktion och hela organisationen. 
              Se till att du tittar in med jämna mellanrum så att du inte missar något!
            </div>
          </div>
        </div>
        <div class="col  welcome-image-container ">
          <img src="../../../public/icons/icon.png" class="welcome-image">
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  props: ['user']
}
</script>

<style scoped>
  .welcome-card-body {
    padding: 0 !important;
  }

  .welcome-card-body {
    min-height: 200px;
  }

  .welcome-card-centering {
    height: 100%;
    width: 100%;
    display: grid;
    align-items: center;
  }

  .welcome-title {
    margin-bottom: 0 !important; 
    padding-bottom: 0 !important;
  }

  .user-name {
    white-space: nowrap;
  }

  .welcome-image-container {
    display: grid;
    align-items: center;
    justify-items: center;
    min-height: 200px;
  }

  .welcome-image {
    height: 160px;
    border-radius: 100%;
    padding: 1px; 
    background: #2C2C2C;
    border: 20px #2C2C2C solid;
  }
</style>

