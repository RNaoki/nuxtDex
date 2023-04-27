<template>
  <div>Pokemon #{{ pokemon }}</div>
</template>

<script lang="ts">
export default {
  data: () => ({
    pokemon: "0",
  }),
  mounted() {
    this.pokemon = this.$route.params.id;
  },
};
</script>

<style scoped></style>
