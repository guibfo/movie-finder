import React from 'react'
import PropTypes from 'prop-types'
import { MovieCard } from '../../components'
import { MoviesWrapper } from './styled'

const MoviesList = props => {
  const { movies } = props

  return (
    <MoviesWrapper>
      {movies.map((movie) => {
        return (
          <MovieCard key={movie.imdbID} movie={movie} />
        )
      })}
    </MoviesWrapper>
  )
}

MoviesList.propTypes = {
  movies: PropTypes.object
}

export default MoviesList
