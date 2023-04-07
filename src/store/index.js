import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    articles: [],
    isloading: false,
    isaborted: false,
    formDialogIsVisible: false,
    controller: new AbortController()
  },
  getters: {
  },
  mutations: {
    fetchArticles (state, articles) {
      state.articles = articles
    },
    addArticle (state, article) {
      state.articles.push(article)
    },
    changeFormDialogVisibillity (state, visibillity) {
      state.formDialogIsVisible = visibillity
    },
    changeArticlePublished (state, article) {
      state.articles[article.index].isPublished = article.ispublished
    }
  },
  actions: {
    fetchArticles (context) { // to start json server type 'json-server --port 8090 --delay 1000 --watch public/articles.json'
      this.state.isloading = true
      this.state.isaborted = false
      this.state.controller = new AbortController()
      Vue.axios('http://localhost:8090/articles', { signal: this.state.controller.signal})
        .then(response => {
          context.commit('fetchArticles', response.data)
          this.state.isloading = false
        })
        .catch(error => console.log(error.message));
    },
    addArticle (context, article) {
      let newArticle = {
        id: this.state.articles.length + 1,
        ...article
      }
      context.commit('addArticle', newArticle)
    },
    abortFetching () {
      this.state.controller.abort()
      console.log('aborted abortFetching()')
      this.state.isaborted = true
    },
    changeFormDialogVisibillity (context, visibillity) {
      context.commit('changeFormDialogVisibillity', visibillity)
    },
    changeArticlePublished (context, id) {
      this.state.articles.forEach((article, index) => {
        if (id === article.id) {
          let ispublished = article.isPublished
          if (ispublished === true) {
            context.commit('changeArticlePublished', { index:index, ispublished:false })
          } else {
            context.commit('changeArticlePublished', { index:index, ispublished:true })
          }
          return false
        }
      });
    }
  },
  modules: {
  }
})
