<template>
  <div>
    <v-row justify="center">
      <v-btn
        class="my-5"
        color="primary"
        @click="showFormDialog"
      >Добавить статью</v-btn>
      <v-dialog
        v-model="this.$store.state.formDialogIsVisible"
        persistent
        max-width="600px"
      >
        <v-card>
          <v-card-title>
            <span class="text-h5">Создание статьи</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="6"
                >
                  <v-text-field
                    v-model="article.title"
                    label="Заголовок статьи*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="6"
                >
                  <v-text-field
                    v-model="article.author"
                    label="Имя автора*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-textarea
                    v-model="article.body"
                    label="Текст статьи*"
                    required
                  ></v-textarea>
                </v-col>
                <v-col>
                  <v-checkbox
                    v-model="article.isPublished"
                    label="Опубликовать"
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-container>
            <small>*Обязательные поля</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="closeFormDialog"
            >
              Отменить
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              v-on:click.prevent="addArticle"
            >
              Сохранить
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'ArticleForm',
  props: {
    title: String,
    body: String,
    author: String,
    isPublished: Boolean,
    dialog: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      article: {
        title: this.title,
        body: this.body,
        author: this.author,
        published: this.isPublished
      }
    }
  },
  methods: {
    addArticle () {
      this.$store.dispatch('addArticle', this.article)
      this.closeFormDialog()
    },
    showFormDialog() {
      this.$store.dispatch('changeFormDialogVisibillity', true)
    },
    closeFormDialog() {
      this.$store.dispatch('changeFormDialogVisibillity', false)
    }
  }
}
</script>

<style>

</style>
