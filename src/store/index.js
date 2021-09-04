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
    movies: [],
    moviesCopy: [],
  },
  getters: {
    getMovies(state) {
      return state.movies
    },
    getMoviesCopy(state) {
      return state.moviesCopy
    }
  },
  mutations: {
    setMoviesArray(state, payload) {
      state.movies = payload
    },
    setMoviesArrayCopy(state, payload) {
      state.moviesCopy = payload.concat()
    },
    addMovie(state, payload) {
      state.movies.unshift(payload)
      state.moviesCopy.unshift(payload)
    },
    deleteMovie(state, payload) {
      state.movies.splice(payload, 1)
      state.moviesCopy.splice(payload, 1)
    },
    sortMovies(state, payload) {
      let sortFunction = (a, b) => (a[payload[1]] > b[payload[1]]) ? 1 : ((b[payload[1]]  > a[payload[1]]) ? -1 : 0)

      if (payload[1] === 'default') {
        state.movies = state.moviesCopy.concat()
      } else {
        if(payload[0] === 'growth') {
          state.movies.sort(sortFunction)
        } else {
          state.movies.sort(sortFunction).reverse()
        }
      }
    }
  },
  actions: {
    async loadMovies({ commit }, payload) {
      try {
        let movies = await loadMoviesApi(payload)
        commit('setMoviesArray', movies)
        commit('setMoviesArrayCopy', movies)
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
    },
    async sortMovies({ commit }, movies) {
      try {
        commit('sortMovies', movies)
      } catch (error) {
        console.log(error)
      }
    },
  }
})