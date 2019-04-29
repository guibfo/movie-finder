import React from 'react'
import { MoviesList } from '../../components'

const Favorites = () => {
  const movies = []

  return (
    <div style={{ height: '100%' }}>
      <MoviesList movies={movies} />
    </div>
  )
}

export default Favorites
