import type { Movie } from '@/models/movie'
import { getRandomNumber } from './get-random-number'

const apiKey = import.meta.env.VITE_MOVIE_API_KEY

export const getRandomMovie = async () => {
  try {
    const random = getRandomNumber()

    const res = await fetch(`https://api.themoviedb.org/3/movie/${random}?api_key=${apiKey}`)

    return (await res.json()) as Movie
  } catch (err) {
    console.log(err)
  }
}
