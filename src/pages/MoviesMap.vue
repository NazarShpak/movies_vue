<template>
  <div
      class = "movies-map"
  >
    <div class = "container">
      <div class = "movies-map__head">
        <h1 class = "movies-map__title">Карта фільмів</h1>
        <div
            class = "movies-map__sort-btn"
            @click = "showSortModal"
        >
        </div>
      </div>

      <div
          v-show = "modalSort"
          class = "movies-map__modal-sort"
      >
        <h2 class = "movies-map__modal-sort-title">Сортувати</h2>
        <span
            class = "movies-map__modal-close-btn"
            @click = "closeSortModal"
        >
        </span>
        <div class = "movies-map__modal-sort-box">
          <label class = "movies-map__check">
            <input
                class = "movies-map__checkbox"
                type = "radio"
                name = "sort"
                value = "default"
                v-model = "sortChek"
            >
            <span class = "movies-map__checkbox-style"></span>
            по замовчуванню
          </label>
          <label class = "movies-map__check">
            <input
                class = "movies-map__checkbox"
                type = "radio"
                name = "check"
                value = "title"
                v-model = "sortChek"
            >
            <span class = "movies-map__checkbox-style"></span>
            по назві
          </label>

          <label class = "movies-map__check">
            <input
                class = "movies-map__checkbox"
                type = "radio"
                name = "check"
                value = "date"
                v-model = "sortChek"
            >
            <span class = "movies-map__checkbox-style"></span>
            по даті виходу
          </label>

          <label class = "movies-map__check">
            <input
                class = "movies-map__checkbox"
                type = "radio"
                name = "check"
                value = "rating"
                v-model = "sortChek"
            >
            <span class = "movies-map__checkbox-style"></span>
            по рейтингу
          </label>

          <select
              class = "movies-map__select"
              v-model = "sortSelect"
          >
            <option
                class = "movies-map__option"
                value = "growth"

            >
              по зростанню
            </option>
            <option
                class = "movies-map__option"
                value = "decline"
            >
              по спаданню
            </option>
          </select>

        </div>
        <br>

        <button
            class = "movies-map__modal-sort-btn"
            @click = "sortMoviesArray"
        >
          Сортувати
        </button>

      </div>

      <div class = "movies-map__item">
        <img
            class = "movies-map__img-add"
            src = ".././assets/images/plus.png"
        >
        <span
            class = "movies-map__add"
            @click = "$router.push ({name: 'add-movie'})"
        >
          Додати фільм
      </span>
      </div>

      <draggable
          class="draggable"
          v-model="movies"
          group="movies"
          @start="drag=true"
          @end="drag=false"
      >
        <div
            class = "movies-map__item"
            v-for = "(img, index) in movies"
            :key = "index"
        >
          <img
              class = "movies-map__img"
              :src = "img['img']"
          >
          <span class = "movies-map__delete">
            <button
                class = "movies-map__delete-btn"
                @click = "showDeleteModal()">
            </button>
          </span>
        </div>
      </draggable>


      <div
          v-show = "modalDelete"
          class = "movies-map__modal-del"
      >
        <h2 class = "movies-map__modal-title">Видалити фільм?</h2>
        <div class = "movies-map__modal-btns">
          <button
              class = "movies-map__modal-btn"
              @click = "deleteMovie(index)"
          >
            Так
          </button>
          <button
              class = "movies-map__modal-btn"
              @click = "noDeleteMovie"
          >
            Ні
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import draggable from 'vuedraggable'

export default {
  name: "MoviesMap",
  data() {
    return {
      sortChek: 'default',
      sortSelect: 'growth',
      modalSort: false,
      modalDelete: false,
    }
  },
  components: {
    draggable,
  },
  directives: {
    ClickOutside
  },
  computed: {
    movies: {
      get() {
        return this.$store.state.movies
      },
      set(value) {
        this.$store.commit('updateMovies', value)
      }
    },
    getSortData() {
      return [this.sortSelect, this.sortChek]
    },
  },
  methods: {
    sortMoviesArray() {
      this.$store.commit("sortMovies", this.getSortData)
      this.modalSort = false
    },
    showSortModal() {
      this.modalSort ? this.modalSort = false : this.modalSort = true
    },
    closeSortModal() {
      this.modalSort = false
    },
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
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: rgba(0, 0, 0, 0.7);
  min-height: 500px;
}
.draggable {
  display: inline;
  cursor: move;
}
.movies-map {
  &__head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  &__title,
  &__modal-sort-title {
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
    right: 10px;
    transform: translate(-50%);
    height: 370px;
    width: 331px;
    background-color: rgba(0, 0, 0, 0.9);
    color: #fff;
  }
  &__modal-sort-title {
    display: inline-block;
    margin: 0 0 0 70px;
  }
  &__modal-close-btn {
    display: inline-block;
    position: relative;
    height: 30px;
    width: 30px;
    margin-left: 67px;
  }
  &__modal-close-btn::after {
    cursor: pointer;
    position: absolute;
    content: "\f00d";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    color: #fff;
    font-size: 25px;
    line-height: 25px;
    bottom: 15px;
  }
  &__modal-sort-box {
    display: flex;
    flex-direction: column;
    margin-left: 67px;
    font-size: 24px;
  }
  &__check {
    display: flex;
    align-items: center;
    padding-left: 39px;
    margin-top: 12px;
    font-size: 20px;
    line-height: 24px;
    margin-left: 10px;
    cursor: pointer;
  }
  &__checkbox {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
  }
  &__checkbox-style {
    position: absolute;
    width: 24px;
    height: 24px;
    border: 1px solid #fff;
    margin-left: -44px;
  }
  &__checkbox:checked + &__checkbox-style::before {
    content: "";
    height: 14px;
    width: 14px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &__select {
    margin-top: 10px;
    margin-left: 5px;
    width: 180px;
    height: 33px;
    font-size: 23px;
    background: #fff;
    cursor: pointer;
  }
  &__option {
    font-size: 16px;
    line-height: 14px;
  }
  &__modal-sort-btn {
    margin-left: 63px;
    width: 200px;
    height: 50px;
    border: 5px solid rgb(84, 6, 6);
    border-radius: 30px;
    font-size: 20px;
    font-weight: bold;
    background-color: rgb(84, 6, 6);
    color: #fff;
    transition: all .5s;

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
  &__img {
    cursor: move;
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
  &__delete {
    cursor: move;
  }
  &__add {
    color: #fff;
    font-size: 30px;
    line-height: 30px;
    font-weight: bold;
  }
  &__delete-btn {
    cursor: pointer;
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
  &__modal-btn:hover,
  &__modal-sort-btn:hover {
    transform:scale(1.05);
    transition: all .5s;
  }
}
</style>