const env = import.meta.env as unknown as {
  VITE_TELEMETRY_ENABLED?: string
  VITE_TELEMETRY_ENDPOINT?: string
  VITE_APP_VERSION?: string
}

export default {
  backdropBaseUrl: 'https://image.tmdb.org/t/p/w1280',
  posterBaseUrl: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2',
  sourceCodeUrl: 'https://www.instagram.com/maullz._/',
  socialUrl: 'https://www.instagram.com/maullz._/',
  tmdbUrl: 'https://themoviedb.org',
  tmdbFilmBaseUrl: 'https://www.themoviedb.org/movie/',
  imdbFilmBaseUrl: 'https://imdb.com/title/',
  contactEmail: 'maulana712bagus@gmail.com',
  disableUI: false,
  telemetry: {
    enabled: false,
    endpoint: undefined,
    appVersion: env?.VITE_APP_VERSION || undefined,
  },
}
