<script setup lang="ts">
import MovieCompleteInput from '../movie-complete-input/MovieCompleteInput.vue'
import MoviePoster from '../movie-poster/MoviePoster.vue'
import MovieLose from '../movie-lose/MovieLose.vue'

import MainButton from '../ui/button/MainButton.vue'
import { computed } from 'vue'

import { useGameStore } from '@/store/game-store'

const gameStore = useGameStore()

const movie = computed(() => gameStore.movie)
const isFetching = computed(() => gameStore.isFetchingMovie)

defineProps<{
  win: boolean
  lose: boolean
}>()

defineEmits<{
  (e: 'input-completed', value: string): void
}>()
</script>

<template>
  <div class="MovieGame">
    <div class="MovieHeaderGame">
      <h1>Let's find this movie:</h1>
      <MainButton v-if="win" @click="async () => gameStore.getMovie()"> Next movie </MainButton>
    </div>

    <p v-if="isFetching">Fetching movie....</p>
    <template v-if="!isFetching && movie">
      <MovieCompleteInput
        v-if="movie && !isFetching"
        @input-completed="(v) => $emit('input-completed', v)"
        :movie="movie"
      />

      <MoviePoster v-if="win" :imdb-id="movie.imdb_id" />
      <MovieLose v-if="lose" />
    </template>
  </div>
</template>

<style scoped lang="scss">
.MovieGame {
  display: flex;
  flex-direction: column;
  gap: 8px;

  .MovieHeaderGame {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
