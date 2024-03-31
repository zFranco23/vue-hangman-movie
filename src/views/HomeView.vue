<script setup lang="ts">
import { computed } from 'vue'
import MovieGame from '../components/movie-game/MovieGame.vue'

import { useMovieValidation } from '@/composables/useMovieValidation'
import GameInitializer from '../components/game-initializer/GameInitializer.vue'

const gameStore = useGameStore()

import { useGameStore } from '@/store/game-store'

const win = computed(() => gameStore.win)
const lose = computed(() => gameStore.lose)

const isGameStarted = computed(() => gameStore.isPlaying)

const { validateMovie } = useMovieValidation()

const movieEval = computed(() => gameStore.movie)

const onValidateInputComplete = (v: string) => {
  const isValid = validateMovie(movieEval.value?.title ?? '', v)

  if (isValid) {
    gameStore.correctMovies++
    gameStore.win = true
  } else {
    gameStore.lose = true
  }
}

const onGameStart = async () => gameStore.getMovie()
</script>

<template>
  <div>
    <GameInitializer v-if="!isGameStarted" @game-start="onGameStart" />

    <MovieGame v-else :win="win" :lose="lose" @input-completed="onValidateInputComplete" />
  </div>
</template>
