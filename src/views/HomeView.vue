<script setup lang="ts">
import { ref } from 'vue'
import MovieGame from '../components/movie-game/MovieGame.vue'

import { useMovieValidation } from '@/composables/useMovieValidation'
import GameInitializer from '../components/game-initializer/GameInitializer.vue'
import { getRandomMovie } from '@/helpers/get-random-movie'
import type { Movie } from '@/models/movie'

const isGameStarted = ref<boolean>(false)

const { validateMovie } = useMovieValidation()

const movieEval = ref<Movie | undefined>()

const onValidateInputComplete = (v: string) => {
  const isValid = validateMovie(movieEval.value?.original_title ?? '', v)

  if (isValid) console.log('asdas')
}

const onGameStart = async () => {
  const movie = await getRandomMovie()
  if (movie) {
    movieEval.value = movie
    isGameStarted.value = true
  }
}
</script>

<template>
  <div>
    <h1>Hangman video game</h1>

    <GameInitializer v-if="!isGameStarted" @game-start="onGameStart" />

    <MovieGame
      v-else-if="movieEval"
      :movie="movieEval"
      @input-completed="onValidateInputComplete"
    />
  </div>
</template>
