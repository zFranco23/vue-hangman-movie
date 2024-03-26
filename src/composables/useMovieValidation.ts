export function useMovieValidation() {
  const validateMovie = (movie: string, movieToEval: string) => {
    const parsedMovieName = movie.trim().replace(' ', '').toLowerCase()
    const parsedValue = movieToEval.trim().replace(' ', '').toLowerCase()
    if (parsedMovieName === parsedValue) return true
    else return false
  }

  return { validateMovie }
}
