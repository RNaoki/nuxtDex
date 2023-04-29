<template>
  <div class="container">
    <div class="pokedex">
      <img src="/Pokedex.png" />
      <div v-if="loading" class="pokemon-container">
        <i class="loading"></i>
      </div>
      <div v-else class="pokemon-container">
        <img v-bind:src="pokemon.sprite" class="pokemon" />
      </div>
      <div class="pokedex-buttons">
        <div class="button" v-on:click="getPreviousPokemon()"></div>
        <div class="button" v-on:click="getNextPokemon()"></div>
      </div>
    </div>
    <div class="stats-table">
      <div>
        <p>#</p>
        <p>Name</p>
        <p>Types</p>
        <p>Base hp</p>
        <p>Base attack</p>
        <p>Base defense</p>
        <p>Base special-attack</p>
        <p>Base special-defense</p>
        <p>Base speed</p>
      </div>
      <div>
        <p>{{ pokemon.number }}</p>
        <p>{{ pokemon.name }}</p>
        <div style="display: flex">
          <span
            v-for="item in pokemon.types"
            :key="item.type.name"
            v-bind:class="getType(item.type.name)"
          >
            {{ item.type.name }}
          </span>
        </div>
        <p>{{ pokemon.hp }}</p>
        <p>{{ pokemon.atk }}</p>
        <p>{{ pokemon.def }}</p>
        <p>{{ pokemon.spatk }}</p>
        <p>{{ pokemon.spdef }}</p>
        <p>{{ pokemon.speed }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getPokemonById } from "~/server/api";
export default {
  data: () => ({
    pokemon: {
      name: "",
      sprite: "",
      number: 1,
      types: [{ type: { name: "" } }],
      hp: 0,
      atk: 0,
      def: 0,
      spatk: 0,
      spdef: 0,
      speed: 0,
    },
    currentPokemon: 1,
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
    getType(type: string) {
      switch (type) {
        case "normal":
          return "type normal";
        case "fire":
          return "type fire";
        case "water":
          return "type water";
        case "electric":
          return "type electric";
        case "grass":
          return "type grass";
        case "ice":
          return "type ice";
        case "fighting":
          return "type fighting";
        case "poison":
          return "type poison";
        case "ground":
          return "type ground";
        case "flying":
          return "type flying";
        case "psychic":
          return "type psychic";
        case "bug":
          return "type bug";
        case "rock":
          return "type rock";
        case "ghost":
          return "type ghost";
        case "dragon":
          return "type dragon";
        case "dark":
          return "type dark";
        case "steel":
          return "type steel";
        case "fairy":
          return "type fairy";
      }
    },
  },
};
</script>

<style scoped>
@import url("@/styles/landing.module.css");
</style>
