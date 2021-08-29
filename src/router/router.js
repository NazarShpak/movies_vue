import VueRouter from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import AllMoviesPage from '../pages/AllMoviesPage'
import AboutMoviePage from '../pages/AboutMoviePage'
import AddMoviePage from '../pages/AddMoviePage'
import MoviesMap from "../pages/MoviesMap";

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "main",
      component: MainPage
    },
    {
      path: "/movies",
      name: "movies",
      component: AllMoviesPage
    },
    {
      path: "/movies/:movieName",
      name: "about-movie",
      component: AboutMoviePage
    },
    {
      path: "/movies/:moviesMap",
      name: "movies-map",
      component: MoviesMap
    },
    {
      path: "/movies/:addMovie",
      name: "add-movie",
      component: AddMoviePage
    }
  ]
  })