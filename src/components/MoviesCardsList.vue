<template>
  <div class = "movies-cards-list">
    <movie-card
      class = "movie-card"
      v-for = "(movie, index) in movies"
      :key = "index"
      :movie = "movie"
    >
    </movie-card>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard'

export default {
  props: {
    movies: {
      type: Array,
    }
  },
  components: {
    MovieCard
  },
}
</script>
<style lang="scss" scoped>
.movie-card {
  margin: 0 auto 70px;
}
</style>