<template>
  <v-card class="mx-auto g-mt-40" max-width="600" tile>
    <v-list-item v-for="(link, index) in pages" :key="index">
      <v-list-item-content>
        <router-link :to="link.to" :title="link.title">
          <v-list-item-title>{{ link.title || link.to }}</v-list-item-title>
        </router-link>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import pages from "@/modules/pages";
export default {
  data: () => ({ pages }),
};
</script>

<style></style>
