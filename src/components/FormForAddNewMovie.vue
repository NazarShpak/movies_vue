<template>
  <div class="form-for-add-new-movie">
    <form
        id="form"
        class="form-for-add-new-movie__form"
        @submit.prevent
    >
      <h2 class="form-for-add-new-movie__title">Форма для додавання</h2>

      <!-- Movie title -->
      <input
          class="form-for-add-new-movie__input"
          type="text"
          name="movie-name"
          placeholder="Назва фільму"
          v-model="title"
          required
      >

      <!-- Rating -->
      <input
          class="form-for-add-new-movie__input"
          type="text"
          name="movie-rating"
          placeholder="Рейтинг"
          v-model="rating"
          required
      >

      <!-- Actors -->
      <input
          class="form-for-add-new-movie__input"
          type="text"
          name="movie-actors"
          placeholder="Актори"
          v-model="actors"
          required
      >

      <!-- Directors -->
      <input
          class="form-for-add-new-movie__input"
          type="text"
          name="movie-directors"
          placeholder="Режисер"
          v-model="directors"
          required
      >

      <!-- Link for main picture -->
      <input
          class="form-for-add-new-movie__input"
          type="text"
          name="movie-img-url"
          placeholder="Посилання на картинку"
          v-model="imgUrl"
          required
      >

      <!-- Link for trailer -->
      <input
          class="form-for-add-new-movie__input"
          type="text"
          name="movie-video-url"
          placeholder="Посилання на трейлер (YouTube)"
          v-model="videoUrl"
          required
      >

      <!-- Description -->
      <textarea
          class="form-for-add-new-movie__textarea"
          name="movie-description"
          placeholder="Сюжет"
          v-model="description"
          required
      >
      </textarea>

      <!-- Add new movie -->
      <button
          class="form-for-add-new-movie__btn"
          :disabled='!isComplete'
          :class="!isComplete ? 'btn-disable' : ''"
          type="submit"
          @click="addNewMovie"
      >
        Додати фільм
      </button>

    </form>
  </div>
</template>

<script>
export default {
  name: "FormForAddNewMovie",
  data() {
    return {
      title: null,
      description: null,
      rating: null,
      actors: null,
      img: null,
      video: null,
      directors: null
    }
  },
  computed: {
    getMovieInfo() {
      return {
        title: this.title,
        description: this.description,
        rating: this.rating,
        actors: [this.actors],
        img: this.imgUrl,
        video: this.videoUrl,
        directors: [this.directors]
      }
    },
    isComplete() {
      return this.title && this.description && this.rating && this.actors && this.imgUrl && this.videoUrl
    }
  },
  methods: {
    addNewMovie() {
      this.$store.commit("addMovie", this.getMovieInfo)
      this.$emit('backToMap')
    }
  },
}
</script>

<style lang="scss" scoped>
.form-for-add-new-movie {
  &__title {
    font-size: 60px;
    line-height: 70px;
    margin: 0 0 50px 0;
    color: #fff;
    padding: 10px 0 0;
    text-align: center;
  }

  &__form {
    width: 700px;
    margin: 0 auto;
    text-align: center;
  }

  &__input {
    width: 700px;
    margin: 0 auto;
    height: 40px;
    border-radius: 30px;
    border: 5px solid rgb(84, 6, 6);
    padding: 0 10px;
    font-size: 20px;
    line-height: 20px;
    font-weight: bold;
  }

  &__input + &__input {
    margin-top: 30px;
  }

  &__input::placeholder {
    font-size: 20px;
    font-weight: bold;
    color: rgb(84, 6, 6);
  }

  &__textarea {
    margin: 30px auto;
    width: 700px;
    height: 200px;
    resize: none;
    border: 5px solid rgb(84, 6, 6);
    border-radius: 30px;
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
  }

  &__textarea::placeholder {
    font-size: 20px;
    font-weight: bold;
    color: rgb(84, 6, 6);
  }

  &__btn {
    cursor: pointer;
    margin: 50px auto 50px;
    width: 700px;
    height: 50px;
    border: 5px solid rgb(84, 6, 6);
    border-radius: 30px;
    font-size: 20px;
    font-weight: bold;
    background-color: rgb(84, 6, 6);
    color: #fff;
    transition: all .5s;
  }

  &__btn:hover {
    transform: scale(1.05);
    transition: all .5s;
  }
}

.btn-disable,
.btn-disable:hover {
  cursor: default;
  transform: none;
  transition: none;
  background-color: #6b6767;
  border: 5px solid #6b6767;
}
</style>