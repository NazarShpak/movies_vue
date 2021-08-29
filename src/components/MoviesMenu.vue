<template>
  <div class = "movies-menu">
    <div class = "container">
      <audio 
        class = "movies-menu__audio"
        ref = "audio"
        :autoplay = "this.autoplay"
        :loop = true
        preload = "auto"
        src="../assets/audio/allMoviesPage-audio.mp3"
      >
      </audio>
      <button 
        class = "movies-menu__btn"
        @click = "$router.push ({name: 'main'})"
      >
        Головна
      </button>
      <button 
        class = "movies-menu__btn"
        @click = "$router.push ({name: 'movies'})"
      >
        Всі фільми
      </button>
      <button 
        class = "movies-menu__btn"
        @click = "$router.push ({name: 'movies-map'})"
      >
        Карта фільмів
      </button>
      <img 
        class = "movies-menu__audio-btn"
        src = "../assets/images/turn on.png" 
        @click = "turnOff"
        v-if = "showBtn"
      >
      <img 
        class = "movies-menu__audio-btn"
        src = "../assets/images/turn off.png" 
        @click = "turnOn"
        v-else
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          showBtn: true,
          autoplay: true
      }
  },
  computed: {
    getAudio() {
      return this.$refs.audio
    }
  },
  methods: {
    turnOff() {
      this.showBtn = false
      this.getAudio.pause()
    },
    turnOn() {
      this.showBtn = true
      this.getAudio.play()
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  // background-color: #fff;
}
.movies-menu {
  background: rgba(0, 0, 0, 0.9);
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  &__audio-btn {
    cursor: pointer;
    width: 40px;
    transition: all .5s;
  }
  &__btn {
    color: #fff;
    background-color: rgb(84, 6, 6);
    border: none;
    height: 50px;
    width: 250px;
    border-radius: 15px;
    font-size: 25px;
    font-weight: 500;
    transition: all .5s;
  }
  &__btn:hover,
  &__audio-btn:hover {
    transform:scale(1.20);
    transition: all .5s;
  }
}
</style>