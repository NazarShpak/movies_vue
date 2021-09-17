<template>
  <div class="add-movie-page">
    <div class="container">

      <!-- Form for add new movie -->
      <form-for-add-new-movie
          class="add-movie-page__form"
          @backToMap="backToMap"
          v-if="showForm"
      >
      </form-for-add-new-movie>

      <!-- Modal info window -->
      <info-modal-window
          v-else
          class="add-movie-page__modal"
      >
      </info-modal-window>

    </div>
  </div>
</template>

<script>
import FormForAddNewMovie from "../components/FormForAddNewMovie";
import InfoModalWindow from "../components/InfoModalWindow";

export default {
  name: 'AddMoviePage',
  components: {
    InfoModalWindow,
    FormForAddNewMovie
  },
  data() {
    return {
      showForm: true,
    }
  },
  methods: {
    backToMap() {
      this.showForm = false
      setTimeout(() => this.$router.push({name: 'movies-map'}), 1500)
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>