import React from 'react'
import PropTypes from 'prop-types'
import { MovieCard } from '../../components'
import { MoviesWrapper, EmptyList } from './styled'

const MoviesList = props => {
  const { movies } = props

  // No movies found message
  if (movies.length === 0) {
    return (
      <EmptyList>
        No movies found <br /> ¯\_(ツ)_/¯
      </EmptyList>
    )
  }

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
  movies: PropTypes.array
}

export default MoviesList
