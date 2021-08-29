<template>
  <div class = "movie-card">
    <img
      class = "movie-card__img"
      :src = "movie.img"
      :alt = "movie.title"
    > 
    <p class = "rating">{{movie.rating}}</p>
    <p class = "title">{{movie.title }}</p>
    <router-link 
      class = "more-info"
      :to = "{ name: 'about-movie', params: {movieName: movie.title}}"
    >
      Детальніше
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object
    }
  }  
}
</script>

<style lang="scss" scoped>
.movie-card {
  position: relative;
  width: 1000px;
  height: 600px;
  &__img {
    object-fit: cover;
    border-radius: 15px;
    width: 100%;
    height: 100%;
  }
  .title {
    position: absolute;
    margin-bottom: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    color: #ffffff;
    height: 100px;
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 90%);
    font-weight: 700;
    padding: 20px;
    font-size: 30px;
    border-radius: 0 0 10px 10px;
  }
  .rating {
    position: absolute;
    right: 0;
    top: 0;
    background-color: rgb(184, 8, 8);
    width: 100px;
    height: 50px;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-weight: 700;
    font-size: 20px;
    border-radius: 0 15px 0 15px;
    opacity: 0.8;
  }
  .more-info {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.6);
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 30px;
    text-decoration: none;
    opacity: 0;
    transition: all 0.2s ease;
    &:hover, &:focus {
      opacity: 1;
    }
  }
}
</style>