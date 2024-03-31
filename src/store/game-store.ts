import { getRandomMovie } from '@/helpers/get-random-movie'
import type { Movie } from '@/models/movie'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// export const useGameStore = defineStore('game', {
//   state: () => ({ attemtps: 0, wins: 0, playing: false })
// })

export const useGameStore = defineStore('game', () => {
  const isFetchingMovie = ref<boolean>(false)
  const correctMovies = ref<number>(0)
  const isPlaying = ref<boolean>(false)
  const movie = ref<Movie | undefined>()
  const win = ref<boolean>(false)
  const lose = ref<boolean>(false)

  const startGame = () => (isPlaying.value = true)

  const setMovie = (m: Movie) => (movie.value = m)

  const getMovie = async () => {
    try {
      isFetchingMovie.value = true

      const m = await getRandomMovie()

      if (m) {
        isPlaying.value = true
        movie.value = m
        win.value = false
      }
    } catch (err) {
      movie.value = undefined
    } finally {
      isFetchingMovie.value = false
    }
  }

  const reset = () => {
    correctMovies.value = 0
    win.value = false
    lose.value = false

    getMovie()
  }

  return {
    isPlaying,
    movie,
    correctMovies,
    lose,
    win,
    startGame,
    setMovie,
    isFetchingMovie,
    getMovie,
    reset
  }
})
