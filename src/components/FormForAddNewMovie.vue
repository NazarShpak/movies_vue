<template>
  <div class="form-for-add-new-movie">
    <form
        id="form"
        class="form-for-add-new-movie__form"
        @submit.prevent="checkForm"
    >
      <h2 class="form-for-add-new-movie__title">Форма для додавання</h2>

      <!-- Movie title -->
      <input
          class="form-for-add-new-movie__input"
          type="text"
          name="movie-name"
          placeholder="Назва фільму"
          v-model.trim="title"

          :class="$v.title.$error ? 'is-invalided' : ''"
      >
      <validate-form-errors
          v-if="$v.title.$dirty && !$v.title.minLength"
          :validateError="'title'"
      >
      </validate-form-errors>

      <!-- Rating -->
      <input
          class="form-for-add-new-movie__input"
          type="number"
          name="movie-rating"
          placeholder="Рейтинг"
          v-model="rating"
          step="0.1"
          :class="$v.rating.$error ? 'is-invalided' : ''"
      >
      <validate-form-errors
          v-if="$v.rating.$dirty && !$v.rating.between"
          :validateError="'rating'"
      >
      </validate-form-errors>

      <!-- Date -->
      <input
          class="form-for-add-new-movie__input"
          type="date"
          name="movie-date"
          placeholder="Дата виходу"
          v-model="date"
      >

      <!-- Actors -->
      <input
          class="form-for-add-new-movie__input"
          type="text"
          name="movie-actors"
          placeholder="Актори"
          v-model="actors"
          :class="$v.actors.$error ? 'is-invalided' : ''"
      >
      <validate-form-errors
          v-if="$v.actors.$dirty && !$v.actors.minLength"
          :validateError="'actors'"
      >
      </validate-form-errors>

      <!-- Directors -->
      <input
          class="form-for-add-new-movie__input"
          type="text"
          name="movie-directors"
          placeholder="Режисер"
          v-model="directors"
          :class="$v.directors.$error ? 'is-invalided' : ''"
      >
      <validate-form-errors
          v-if="$v.directors.$dirty && !$v.directors.minLength"
          :validateError="'directors'"
      >
      </validate-form-errors>

      <!-- Link for main picture -->
      <input
          class="form-for-add-new-movie__input"
          type="text"
          name="movie-img-url"
          placeholder="Посилання на картинку"
          v-model="img"
          :class="$v.img.$error ? 'is-invalided' : ''"
      >
      <validate-form-errors
          v-if="$v.img.$dirty && !$v.img.url"
          :validateError="'img'"
      >
      </validate-form-errors>

      <!-- Link for trailer -->
      <input
          class="form-for-add-new-movie__input"
          type="text"
          name="movie-video-url"
          placeholder="Посилання на трейлер (YouTube)"
          v-model="video"
          :class="$v.video.$error ? 'is-invalided' : ''"
      >
      <validate-form-errors
          v-if="$v.video.$dirty && !$v.video.url"
          :validateError="'video'"
      >
      </validate-form-errors>

      <!-- Description -->
      <textarea
          class="form-for-add-new-movie__textarea"
          name="movie-description"
          placeholder="Сюжет"
          v-model="description"
          :class="$v.description.$error ? 'is-invalided' : ''"
      >
      </textarea>
      <validate-form-errors
          v-if="$v.description.$dirty && !$v.description.minLength"
          :validateError="'description'"
      >
      </validate-form-errors>

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
import { url, minLength, between } from 'vuelidate/lib/validators'
import ValidateFormErrors from "./ValidateFormErrors"

export default {
  name: "FormForAddNewMovie",
  components: {
    ValidateFormErrors
  },
  data() {
    return {
      title: null,
      description: null,
      date: null,
      rating: null,
      actors: null,
      img: null,
      video: null,
      directors: null,
      formValidate: false
    }
  },
  validations: {
    title: {
      minLength: minLength(3),

    },
    description: {
      minLength: minLength(15),
    },
    rating: {
      between: between(0, 10)
    },
    actors: {
      minLength: minLength(5)
    },
    img: {
      url
    },
    video: {
      url
    },
    directors: {
      minLength: minLength(5)
    }
  },
  computed: {
    getMovieInfo() {
      return {
        title: this.title,
        description: this.description,
        rating: this.rating,
        date: this.date,
        actors: [this.actors],
        img: this.img,
        video: this.video,
        directors: [this.directors]
      }
    },
    isComplete() {
      return this.title && this.description && this.rating && this.date && this.actors && this.img && this.video
    }
  },
  methods: {
    addNewMovie() {
      if(this.formValidate) {
        this.$store.commit("addMovie", this.getMovieInfo)
        this.$emit('backToMap')
      }
    },
    checkForm() {
      this.$v.$touch()
      if(!this.$v.$error) {
        this.formValidate = true
      }
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

.is-invalided,
.invalided {
  border-color: red;
  color: red;
}
</style>