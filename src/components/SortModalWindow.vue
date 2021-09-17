<template>
  <div class="sort-modal-window">

    <h2 class="sort-modal-window__title">Сортувати</h2>

    <!-- Close sort modal -->
    <span
        class="sort-modal-window__close-btn"
        @click="closeSortModal"
    >
      </span>

    <!-- Categories of sort -->
    <div class="sort-modal-window__box">

      <!-- Default sort -->
      <label class="sort-modal-window__check">
        <input
            class="sort-modal-window__checkbox"
            type="radio"
            name="sort"
            value="default"
            v-model="sortChek"
        >
        <span class="sort-modal-window__checkbox-style"></span>
        по замовчуванню
      </label>

      <!-- Titles sort -->
      <label class="sort-modal-window__check">
        <input
            class="sort-modal-window__checkbox"
            type="radio"
            name="check"
            value="title"
            v-model="sortChek"
        >
        <span class="sort-modal-window__checkbox-style"></span>
        по назві
      </label>

      <!-- Dates sort -->
      <label class="sort-modal-window__check">
        <input
            class="sort-modal-window__checkbox"
            type="radio"
            name="check"
            value="date"
            v-model="sortChek"
        >
        <span class="sort-modal-window__checkbox-style"></span>
        по даті виходу
      </label>

      <!-- Rating sort -->
      <label class="sort-modal-window__check">
        <input
            class="sort-modal-window__checkbox"
            type="radio"
            name="check"
            value="rating"
            v-model="sortChek"
        >
        <span class="sort-modal-window__checkbox-style"></span>
        по рейтингу
      </label>

      <!-- Sort by ascending or descending -->
      <select
          class="sort-modal-window__select"
          v-model="sortSelect"
      >

        <option
            class="sort-modal-window__option"
            value="growth"

        >
          по зростанню
        </option>

        <option
            class="sort-modal-window__option"
            value="decline"
        >
          по спаданню
        </option>

      </select>

    </div>

    <!-- Sort movies -->
    <button
        class="sort-modal-window__sort-btn"
        @click="sortMoviesArray"
    >
      Сортувати
    </button>

  </div>
</template>

<script>
export default {
  name: "SortModalWindow",
  data() {
    return {
      sortChek: 'default',
      sortSelect: 'growth',
    }
  },
  computed: {
    getSortData() {
      return {'sortSelect': this.sortSelect, 'sortChek': this.sortChek}
    },
  },
  methods: {
    sortMoviesArray() {
      this.$store.commit("sortMovies", this.getSortData)
      this.closeSortModal()
    },
    closeSortModal() {
      this.$emit('closeSortModal')
    },
  }
}
</script>

<style lang="scss" scoped>
.sort-modal-window {
  height: 370px;
  width: 331px;
  background-color: rgba(0, 0, 0, 0.95);
  color: #fff;

  &__title {
    color: #fff;
    padding-top: 15px;
    padding-bottom: 15px;
    position: relative;
    display: inline-block;
    margin: 0 0 0 70px;
  }

  &__close-btn {
    display: inline-block;
    position: relative;
    height: 30px;
    width: 30px;
    margin-left: 67px;
  }

  &__close-btn::after {
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

  &__box {
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
    margin: 10px 0 10px 5px;
    width: 180px;
    height: 33px;
    font-size: 23px;
    background: #fff;
    cursor: pointer;
    border-radius: 10px;
  }

  &__option {
    font-size: 16px;
    line-height: 14px;
  }

  &__sort-btn {
    margin-left: 63px;
    padding: 5px 45px;
    border: 5px solid rgb(84, 6, 6);
    border-radius: 30px;
    font-size: 20px;
    font-weight: bold;
    background-color: rgb(84, 6, 6);
    color: #fff;
    transition: all .5s;
  }

  &__sort-btn:hover {
    transform: scale(1.05);
    transition: all .5s;
  }
}
</style>