<template>
  <div id = "app">
    <movies-menu
      class = "movies-menu"
      v-if = "$route.name !== 'main'"
    >
    </movies-menu>
    <router-view></router-view>
    <!--    <movies-map/>-->
    <!-- <add-movie-page/> -->
  </div>
</template>

<script>
import MoviesMenu from './components/MoviesMenu.vue'
// import MoviesMap from "./pages/MoviesMap.vue";
// import AddMoviePage from './pages/AddMoviePage.vue'

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    MoviesMenu,
    // MoviesMap,
    // AddMoviePage
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
