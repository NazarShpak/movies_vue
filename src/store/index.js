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
    updateMovies(state, payload) {
      state.movies = payload.concat()
      state.moviesCopy = payload.concat()
    },
    addMovie(state, payload) {
      state.movies.unshift(payload)
    },
    deleteMovie(state, payload) {
      state.movies.splice(payload, 1)
    },
    sortMovies(state, {sortSelect, sortCheck}) {
      let sortFunction = (a, b) => (a[sortCheck] > b[sortCheck]) ? 1 : ((b[sortCheck]  > a[sortCheck]) ? -1 : 0)

      if (sortCheck === 'default') {
        state.movies = state.moviesCopy.concat()
      } else {
        if(sortSelect === 'growth') {
          state.movies.sort(sortFunction)
        } else {
          state.movies.sort(sortFunction).reverse()
        }
      }
    },
  },
  actions: {
    async loadMovies({ commit }, payload) {
      try {
        if(payload.length === 0) {
          let movies = await loadMoviesApi(payload)
          commit('updateMovies', movies)
        } else {
          commit('updateMovies', payload)
        }
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
    async sortMovies({ commit }, params) {
      try {
        commit('sortMovies', params)
      } catch (error) {
        console.log(error)
      }
    },
  }
})