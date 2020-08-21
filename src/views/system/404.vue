<template>
  <v-card class="mx-auto g-mt-40 g-px-30 g-py-20" max-width="400">
    <h1>
      Not Found
      <router-link class="NotFound__back-link" to="/">Home</router-link>
    </h1>
  </v-card>
</template>

<script>
export default {};
</script>

<style lang="scss">
.NotFound {
  &__back-link {
    font-size: 15px;
    font-weight: normal;
    margin-left: 6px;
  }
}
</style>
