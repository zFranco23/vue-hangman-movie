/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_MOVIE_API_KEY: string
  readonly VITE_MOVIE_POSTER_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
