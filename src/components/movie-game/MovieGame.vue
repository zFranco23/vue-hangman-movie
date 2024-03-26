<script setup lang="ts">
import type { Movie } from '@/models/movie'
import MovieCompleteInput from '../movie-complete-input/MovieCompleteInput.vue'
import MoviePoster from '../movie-poster/MoviePoster.vue'

defineProps<{
  movie: Movie
}>()

defineEmits<{
  (e: 'input-completed', value: string): void
}>()
</script>

<template>
  <div>
    <MovieCompleteInput
      @input-completed="(v) => $emit('input-completed', v)"
      :name="movie.original_title"
    />

    <MoviePoster :imdb-id="movie.imdb_id" />
  </div>
</template>
