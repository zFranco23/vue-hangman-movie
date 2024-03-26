export function useMovieValidation() {
  const validateMovie = (movie: string, movieToEval: string) => {
    const parsedMovieName = movie.trim().replace(/\s/g, '').toLowerCase()
    const parsedValue = movieToEval.trim().replace(/\s/g, '').toLowerCase()
    if (parsedMovieName === parsedValue) return true
    else return false
  }

  return { validateMovie }
}
