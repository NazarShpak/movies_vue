<template>
  <div class="movies-map">
    <div class="container">
      <div class="movies-map__head">
        <h1 class="movies-map__title">Карта фільмів</h1>
        <div
            class="movies-map__sort-btn"
            @click="showSortModal()"
        >
        </div>
      </div>

      <div
          v-show="modalSort"
          class = "movies-map__modal-sort"
      >
      </div>

      <div class="movies-map__item">
        <img
            class = "movies-map__img-add"
            src = ".././assets/images/plus.png"
        >
        <span
            class="movies-map__add"
            @click = "$router.push ({name: 'add-movie'})"
        >
          Додати фільм
      </span>
      </div>
      <div
          class="movies-map__item"
          v-for="(img, index) in this.movies"
          :key="index"
      >
        <img
            class = "movies-map__img"
            :src = "img['img']"
        >
        <span class="movies-map__delete">
          <button
              class="movies-map__delete-btn"
              @click="showDeleteModal()">
          </button>
        </span>
      </div>
      <div
          v-show="modalDelete"
          class = "movies-map__modal-del"
      >
        <h2 class = "movies-map__modal-title">Видалити фільм?</h2>
        <div class="movies-map__modal-btns">
          <button
              class="movies-map__modal-btn"
              @click="deleteMovie(index)"
          >
            Так
          </button>
          <button
              class="movies-map__modal-btn"
              @click="noDeleteMovie"
          >
            Ні
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoviesMap",
  data() {
    return {
      modalSort: false,
      modalDelete: false
    }
  },
  computed: {
    movies() {
      return this.$store.getters.getMovies
    },
  },
  methods: {
    showDeleteModal() {
      this.modalDelete = true
    },
    noDeleteMovie() {
      this.modalDelete = false
    },
    deleteMovie(index) {
      this.$store.commit("deleteMovie", index)
      this.modalDelete = false
    },
    showSortModal() {
      this.modalSort ? this.modalSort = false : this.modalSort = true
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: rgba(0, 0, 0, 0.7);
  min-height: 500px;
}
.movies-map {
  &__head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  &__title {
    color: #fff;
    margin: 0 0 10px 30px;
    padding-top: 15px;
    padding-bottom: 15px;
    position: relative;
  }
  &__sort-btn {
    cursor: pointer;
    position: relative;
    color: #fff;
  }
  &__sort-btn::before {
    position: absolute;
    bottom: -20px;
    right: 39px;
    content: "\f885";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 40px;
    line-height: 40px;
    transform: rotate(180deg);
  }
  &__modal-sort {
    position: absolute;
    z-index: 3;
    top: 190px;
    left: 50%;
    transform: translate(-50%);
    height: 451px;
    width: 646px;
    background-color: rgba(0, 0, 0, 0.9);
  }
  &__item {
    display: inline-block;
    position: relative;
    width: 300px;
    height: 200px;
    margin: 15px 25px;
  }
  &__img,
  &__img-add{
    cursor: pointer;
    object-fit: cover;
    border-radius: 15px;
    width: 300px;
    height: 200px;
  }
  &__delete,
  &__add{
    position: absolute;
    cursor: pointer;
    height: 200px;
    width: 300px;
    bottom: 0;
    left: 0;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: all 0.2s ease;
    &:hover, &:focus {
      opacity: 1;
    }
  }
  &__add {
    color: #fff;
    font-size: 30px;
    line-height: 30px;
    font-weight: bold;
  }
  &__delete-btn {
    position: relative;
    border: none;
    background: none;
  }
  &__delete-btn::after {
    cursor: pointer;
    position: absolute;
    content: "\f2ed";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    color: #fff;
    font-size: 70px;
    line-height: 70px;
    top: -25px;
    left: -25px;
    opacity: 0.8;
  }
  &__modal-del {
    position: absolute;
    z-index: 3;
    top: 190px;
    left: 50%;
    transform: translate(-50%);
    height: 235px;
    width: 500px;
    background-color: rgba(0, 0, 0, 0.9);
  }
  &__modal-title {
    font-size: 40px;
    line-height: 40px;
    margin: 50px auto;
    color: #fff;
    text-align: center;
  }
  &__modal-btns {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  &__modal-btn + &__modal-btn {
    margin-left: 40px;
  }
  &__modal-btn {
    width: 150px;
    height: 50px;
    border: 5px solid rgb(84, 6, 6);
    border-radius: 30px;
    font-size: 20px;
    font-weight: bold;
    background-color: rgb(84, 6, 6);
    color: #fff;
    transition: all .5s;
  }
  &__modal-btn:hover {
    transform:scale(1.05);
    transition: all .5s;
  }
}

</style>