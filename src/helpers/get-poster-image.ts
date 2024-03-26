const posterApiKey = import.meta.env.VITE_MOVIE_POSTER_KEY

export const getPosterImage = (imdbId: string) => {
  return `http://img.omdbapi.com?apiKey=${posterApiKey}&i=${imdbId}`
}
