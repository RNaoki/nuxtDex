<template>
  <div class="pokedex">
    <img src="/Pokedex.png" />
    <div v-if="loading" class="pokemon-container">
      <i class="loading"></i>
    </div>
    <div v-else class="pokemon-container">
      <img v-bind:src="pokemon.sprite" class="pokemon" />
    </div>
    <div class="pokedex-buttons">
      <div class="button" v-on:click="getPreviousPokemon()">A</div>
      <div class="button" v-on:click="getNextPokemon()">B</div>
    </div>
  </div>
</template>

<script lang="ts">
import { getPokemonById } from "~/server/api";
export default {
  data: () => ({
    pokemon: { name: "", sprite: "" },
    currentPokemon: 648,
    loading: true,
  }),
  async mounted() {
    this.getPokemon(this.currentPokemon);
  },
  methods: {
    async getPokemon(id: number) {
      this.loading = true;
      const response = await getPokemonById(id);
      this.pokemon = response;
      this.loading = false;
    },
    getNextPokemon() {
      if (this.currentPokemon < 649) {
        this.currentPokemon += 1;
      } else {
        this.currentPokemon = 1;
      }
      this.getPokemon(this.currentPokemon);
    },
    getPreviousPokemon() {
      if (this.currentPokemon > 1) {
        this.currentPokemon -= 1;
      } else {
        this.currentPokemon = 649;
      }
      this.getPokemon(this.currentPokemon);
    },
  },
};
</script>

<style scoped>
@import url("@/styles/landing.module.css");
</style>
