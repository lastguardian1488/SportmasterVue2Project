import Vue from 'vue'
import Router from 'vue-router'
import AboutPage from '../components/AboutPage'
import MainPage from '../components/MainPage'
import ArticlePage from '../components/ArticlePage'
import SimpleTable from '../components/SimpleTable'
import store from '../store/'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: MainPage
    },
    {
      path: '/about',
      name: 'About',
      component: AboutPage
    },
    {
      path: '/article/:id',
      component: ArticlePage,
      props: (route) => store.state.articles.find((x) => x.id == route.params.id)
    },
    {
      path: '/table',
      name: 'Table',
      component: SimpleTable
    }
  ]
})
