<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <router-link to="/" class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://placekitten.com/200/200"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://placekitten.com/200/200"
          width="100"
        />
      </router-link>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    links: [
      {
        to: "/lottie-job",
        title: "lottie-job",
      },
    ],
  }),
};
</script>
