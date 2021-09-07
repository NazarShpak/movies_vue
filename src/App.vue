<template>
  <div id = "app">
    <movies-menu
      class = "movies-menu"
      v-if = "$route.name !== 'main'"
    >
    </movies-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import MoviesMenu from './components/MoviesMenu.vue'

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    MoviesMenu
  },
}
</script>

<style scoped>
  /*.movies-menu {*/
  /*  position: absolute;*/
  /*  top: 0;*/
  /*  z-index: 10;*/
  /*}*/
</style>
