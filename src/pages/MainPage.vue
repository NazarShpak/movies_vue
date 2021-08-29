<template>
  <div class = "main-page">
    <h1 class = "main-page__title">
      MARVEL
    </h1>
    <button 
      class = "main-page__btn" 
      type = "button" 
      @click = "$router.push ({name: 'movies'})"
    >
      Перейти до фільмів
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    audio() {
      return new Audio(require('../assets/audio/mainPage-audio.mp3'))
    }
  },
  created() {
    this.audio.play()
  },
  beforeDestroy() {
    this.audio.pause()
  }
}
</script>

<style lang="scss" scoped>
  .main-page {
    background: url("../assets/images/mainPageWallpaper.jpg"), #000000;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center -80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    &__title {
      opacity: 0;
      color: #ffffff;
      text-shadow: 8px 8px 10px rgb(84, 6, 6);
      font-size: 150px;
      margin-top: 340px;
      margin-bottom: 30px;
      display: flex;
      flex-direction: row;
      animation: title 4s linear 2s forwards;
    }
    &__btn {
      cursor: auto;
      display: block;
      opacity: 0;
      border: 1px solid #fff;
      color: #fff;
      padding: 5px 40px;
      background: none;
      border-radius: 20px;
      transition: all .5s;
      animation: button 3s linear 8s forwards;
    }
    &__btn:hover {
      transform:scale(1.20);
      transition: all .5s;
    }
  }
  @keyframes title {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.2;
      transform:scale(1.30)
    }
    100% {
      opacity: 1;
      transform:scale(1)
    }
  } 
  @keyframes button {
    0% {
      opacity: 0;
      cursor: auto;
    }
    30% {
      opacity: 0.2;
    }
    50% {
      cursor: pointer;
    }
    100% {
      opacity: 1;
      cursor: pointer;
    }
  } 
</style>