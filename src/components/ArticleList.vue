<template>
  <div>
      <v-carousel
        hide-delimiters
        prev-icon="mdi-arrow-left"
        next-icon="mdi-arrow-right"
      >
        <v-carousel-item
          v-for="(article,i) in articles"
          :key="i"
        >
          <v-card
            class="mx-auto"
            max-width="800"
          >
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="350px"
            ></v-img>

            <v-card-title>
              {{ article.title }}
            </v-card-title>

            <v-card-subtitle>
              Автор: {{ article.author }}
            </v-card-subtitle>

            <v-divider></v-divider>

            <v-card-actions>
              <v-btn
                :to="'/article/' + article.id"
                color="orange lighten-2"
                text
              >Подробнее</v-btn>
            </v-card-actions>
          </v-card>
        </v-carousel-item>
      </v-carousel>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ArticleList',
  computed: mapState({
    count: state => state.articles.length,

    articles: 'articles'
  }),
}
</script>

<style scoped>

</style>
