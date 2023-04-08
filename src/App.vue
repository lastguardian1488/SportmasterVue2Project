<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list dense>
        <v-subheader>МЕНЮ</v-subheader>
        <v-list-item-group
          color="primary"
        >
          <v-list-item
            to="/"
          >
            <v-list-item-icon>
              <v-icon>mdi-view-carousel</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Статьи</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            to="/about"
          >
            <v-list-item-icon>
              <v-icon>mdi-information-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>О нас</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            to="/table">
            <v-list-item-icon>
              <v-icon>mdi-table</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Таблица</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <strong class="mr-2">SPORTMASTER</strong>
      </div>

      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            to="/"
          >
            <v-list-item-title>Статьи</v-list-item-title>
          </v-list-item>
          <v-list-item
            to="/about"
          >
            <v-list-item-title>О нас</v-list-item-title>
          </v-list-item>
          <v-list-item
            to="/table"
          >
            <v-list-item-title>Таблица</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer
        dark
        padless
      >
        <v-card
          class="flex"
          flat
          tile
        >
          <v-card-title class="primary">
            <strong class="subheading">Get connected with us on social networks!</strong>

            <v-spacer></v-spacer>

            <v-btn
              v-for="icon in {0:'twitter', 1:'instagram', 2:'twitch', 3:'facebook'}"
              :key="icon"
              class="mx-4"
              dark
              icon
            >
              <v-icon size="24px">
                mdi-{{ icon }}
              </v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text class="py-2 white--text text-center">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-card-text>
        </v-card>
      </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
a {
  text-decoration: none;
  color:black
}
footer {
  z-index: 99;
}
</style>