<script setup lang="ts">
import { ref } from 'vue'
import MovieCompleteInputVue from '../components/movie-complete-input/MovieCompleteInput.vue'

const movieName = ref<string>('The hangover')

const onValidateInputComplete = (v: string) => {
  const parsedMovieName = movieName.value.trim().replace(' ', '').toLowerCase()
  const parsedValue = v.trim().replace(' ', '').toLowerCase()
  if (parsedMovieName === parsedValue) alert('win')
}
</script>

<template>
  <div>
    <h1>Hangman video game</h1>

    <MovieCompleteInputVue :movie="movieName" @input-completed="onValidateInputComplete" />
  </div>
</template>
