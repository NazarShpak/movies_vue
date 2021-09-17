<template>
  <div class="about-movie-page">
    <div class="container">
      <h1 class="about-movie-page__title">{{ movie.title }}</h1>

      <!-- Youtube video trailer-->
      <youtube 
        class="about-movie-page__video"
        :video-id="videoId"
        :host="movie.video"
        player-height="600"
        player-width="1050"
      >
      </youtube>

      <!-- Main movie info -->
      <div class="content">
        <p class="content__title">Сюжет:</p>
        <p class="content__description">{{ movie.description }}</p>
      </div>

      <div class="content">
        <p class="content__title">Рейтинг:</p>
        <p class="content__description">{{ movie.rating }}</p>
      </div>

      <div class="content">
        <p class="content__title">Дата виходу:</p>
        <p class="content__description">{{ movie.date }}</p>
      </div>

      <div class="content">
        <p class="content__title">Акторський склад:</p>
        <p class="content__description">{{ movie.actors.join(', ') }}</p>
      </div>

      <div class="content">
        <p class="content__title">Режисери:</p>
        <p class="content__description description-last">{{ movie.directors.join(', ') }}</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        movie: null,
    }
  },
  created() {
    this.movie = this.movies.find(movie => movie.title == this.$route.params.movieName)
  },
  computed: {
    movies() {
      return this.$store.getters.getMovies
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: rgba(0, 0, 0, 0.7);
}
.about-movie-page {
  width: 100%;
  &__title {
    color: rgb(213, 20, 20);
    margin-bottom: 30px;
    padding-top: 15px;
    padding-bottom: 15px;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      bottom: 0;
      left: 0;
      background: linear-gradient(90deg, rgb(213, 20, 20) 0%, rgba(0,0,0,0) 90%);
    }
  }
  &__video {
    margin-left: 5px;
  }
  .content {
    &__title {
      color: rgb(213, 20, 20);
      font-weight: 700;
      font-size: 25px;
      margin-bottom: 10px;
    }
    &__description {
      color: #fff;
      font-size: 18px;
      line-height: 30px;
    }
    &__description.description-last {
      padding-bottom: 50px;
    }
  }
}
</style>