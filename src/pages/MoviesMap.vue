<template>
  <div
      class="movies-map"
  >
    <div class="container">
      <div class="movies-map__head">
        <h1 class="movies-map__title">Карта фільмів</h1>

        <!-- Show sort modal -->
        <div
            class="movies-map__sort-btn"
            @click="showSortModal"
        >
        </div>
      </div>

      <!-- Sort modal -->
      <sort-modal-window
          class="movies-map__modal-sort"
          v-show="modalSort"
          @closeSortModal="modalSort = false"
      >
      </sort-modal-window>

      <!-- Open add movie page -->
      <div class="movies-map__item">
        <img
            class="movies-map__img-add"
            src=".././assets/images/plus.png"
        >
        <span
            class="movies-map__add"
            @click="$router.push ({name: 'add-movie'})"
        >
          Додати фільм
      </span>
      </div>

      <!-- Movies -->
      <draggable
          class="draggable"
          v-model="movies"
          group="movies"
          @start="drag=true"
          @end="drag=false"
      >

        <!-- Movie block -->
        <div
            class="movies-map__item"
            v-for="(img, index) in movies"
            :key="index"
        >
          <!-- Movie image -->
          <img
              class="movies-map__img"
              :src="img['img']"
          >

          <!-- Show delete movie modal -->
          <span class="movies-map__delete">
            <button
                class="movies-map__delete-btn"
                @click="showDeleteModal(index)">
            </button>
          </span>

        </div>

      </draggable>

      <!-- Delete movie -->
      <delete-modal-window
          class="movies-map__modal-delete"
          v-if="modalDelete"
          :index="index"
          @closeModal="modalDelete = false"
      >
      </delete-modal-window>

    </div>
  </div>
</template>

<script>
// import ClickOutside from 'vue-click-outside'
import draggable from 'vuedraggable'
import SortModalWindow from "../components/SortModalWindow";
import DeleteModalWindow from "../components/DeleteModalWindow";

export default {
  name: "MoviesMap",
  data() {
    return {
      modalSort: false,
      modalDelete: false,
      index: null,
    }
  },
  components: {
    DeleteModalWindow,
    SortModalWindow,
    draggable,
  },
  // directives: {
  //   ClickOutside
  // },
  computed: {
    movies: {
      get() {
        return this.$store.state.movies
      },
      set(value) {
        this.$store.commit('updateMovies', value)
      }
    },
  },
  methods: {
    showSortModal() {
      this.modalSort = !this.modalSort
    },
    showDeleteModal(index) {
      this.modalDelete = true
      this.index = index
    },
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: rgba(0, 0, 0, 0.7);
  min-height: 500px;
  position: relative;
}

.draggable {
  display: inline;
  cursor: move;
}

.movies-map {
  position: relative;
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

  &__modal-sort,
  &__modal-delete {
    position: absolute;
    z-index: 3;
    top: 190px;
    right: 10px;
    transform: translate(-50%);
  }

  &__modal-delete {
    left: 50%;
  }

  &__modal-sort {
    top: 100px;
    right: -115px;
  }

  &__item {
    display: inline-block;
    position: relative;
    width: 300px;
    height: 200px;
    margin: 15px 25px;
  }

  &__img,
  &__img-add {
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
  &__add {
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
}
</style>