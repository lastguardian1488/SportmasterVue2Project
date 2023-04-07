<template>
<div> 
  <v-card>
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    ></v-img>
    <v-card-title v-bind:class="{ notPublished : !isPublished}">{{ title }}</v-card-title>
    <v-card-subtitle v-bind:style="{ fontStyle : fontStyleAuthor }">Автор: {{ upperAuthorName }}</v-card-subtitle>
    
    <v-divider></v-divider>

    <v-card-text>{{ body }}</v-card-text>

    <v-divider></v-divider>
    
    <v-card-actions>
      <v-btn
        color="red lighten-2"
        text
        @click="changePublished()"
      >
        СМЕНИТЬ СТАТУС ПУБЛИКАЦИИ
      </v-btn>
    </v-card-actions>
  </v-card>
</div>
</template>

<script>
export default {
  name: 'ArticlePage',
  props: {
    id: Number,
    title: String,
    body: String,
    author: String,
    isPublished: Boolean
  },
  computed: {
    upperAuthorName () {
      return this.author.toUpperCase()
    },
    fontStyleAuthor () {
      return this.isPublished ? 'normal' : 'italic'
    }
  },
  methods: {
    changePublished() {
      this.$store.dispatch('changeArticlePublished', this.id)
    }
  }
}
</script>

<style scoped>
.article {
    margin: 1rem 0;
}

h3 {
    margin: 40px 0 0;
}

a {
    color: #42b983;
}

.notPublished  {
    color: crimson;
}
</style>
