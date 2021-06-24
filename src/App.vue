<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  created() {
    console.log(`  ..---..\n /       \\\ \n|         | \n:         : \n \\\  \\\~/  / \n  \`, Y ,' \n   |_|_| \n   |===| \n   |===| \n    \\\_/
    \nIntrigia Student Media, \nfor students by students! 
    \nWith \u2665 from Literal Goat aka. Daniel Öhman
    `)
  }
}
</script>
