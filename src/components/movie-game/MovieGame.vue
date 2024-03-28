<script setup lang="ts">
import type { Movie } from '@/models/movie'
import MovieCompleteInput from '../movie-complete-input/MovieCompleteInput.vue'
import MoviePoster from '../movie-poster/MoviePoster.vue'

defineProps<{
  movie: Movie
  win: boolean
}>()

defineEmits<{
  (e: 'input-completed', value: string): void
}>()
</script>

<template>
  <div class="MovieGame">
    <h1>Let's find this movie:</h1>
    <MovieCompleteInput @input-completed="(v) => $emit('input-completed', v)" :movie="movie" />

    <MoviePoster v-if="win" :imdb-id="movie.imdb_id" />
  </div>
</template>

<style scoped lang="scss">
.MovieGame {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
