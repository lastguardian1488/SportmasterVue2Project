<template>
    <div>
      <PageLoader/>
      <ArticleList/>
      <article-form/>
    </div>
</template>

<script>
import ArticleList from './ArticleList.vue'
import PageLoader from './PageLoader.vue'
import ArticleForm from './ArticleForm.vue'

export default {
  name: 'MainPage',
  components: {
    ArticleList, PageLoader, ArticleForm
  }
}
</script>

<style>

</style>
