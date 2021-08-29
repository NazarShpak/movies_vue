import Vue from 'vue'
import Vuex from 'vuex'
import movies from "../data-movies/movies";

Vue.use(Vuex)

let loadMoviesApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(movies)
    }, 0)
  })
}

export default new Vuex.Store({
  state: {
    movies: []
  },
  getters: {
    getMovies(state) {
      return state.movies
    }
  },
  mutations: {
    setMoviesArray(state, payload) {
      state.movies = payload
    },
    addMovie(state, payload) {
      state.movies.unshift(payload)
    },
    deleteMovie(state, payload) {
      state.movies.splice(payload, 1)
    }
  },
  actions: {
    async loadMovies({ commit }, payload) {
      try {
        let movies = await loadMoviesApi(payload)
        commit('setMoviesArray', movies)
      } catch (error) {
        console.log(error)
      }
    },
    async loadMovie({ commit }, movie) {
      try {
        commit('addMovie', movie)
        commit('deleteMovie', movie)
      } catch (error) {
        console.log(error)
      }
    }
  }
})