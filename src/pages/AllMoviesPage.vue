<template>
  <div class = "all-movies-page">
    <div class = "container">
      <h2 class = "all-movies-page__title">Топ від MARVEL</h2>
      <movies-cards-list 
        :movies = "movies" 
      >
      </movies-cards-list>
    </div>
  </div>
</template>

<script>
import MoviesCardsList from '../components/MoviesCardsList'

export default {
  data() {
    return {}
  },
  components: { 
      MoviesCardsList,
  },
  created() {
    this.$store.dispatch('loadMovies')
  },
  computed: {
    movies() {
      return this.$store.getters.getMovies
    }
  }
}
</script>

<style lang="scss" scoped>
.all-movies-page__title {
  font-size: 60px;
  line-height: 70px;
  color: #ffff;
  text-align: left;
  margin: 50px 0 50px 32px;
  padding: 10px 0 15px 15px;
  border-radius: 20px 0 0 20px;
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 90%);
}
</style>