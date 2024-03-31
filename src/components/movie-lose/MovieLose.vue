<script setup lang="ts">
import { storeToRefs } from 'pinia'
import MainButton from '../ui/button/MainButton.vue'

import { useGameStore } from '@/store/game-store'

const gameStore = useGameStore()
const { correctMovies } = storeToRefs(gameStore)
</script>

<template>
  <h2>Sorry but you lose :'c</h2>

  <h2>You guessed {{ correctMovies }} movies</h2>
  <MainButton variant="contained" class="MovieLose__restart" @click="gameStore.reset()">
    Restart
  </MainButton>
</template>

<style lang="scss" scoped>
.MovieLose__restart {
  width: fit-content;
}
</style>
