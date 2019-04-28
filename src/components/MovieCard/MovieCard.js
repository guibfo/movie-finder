import React from 'react'
import PropTypes from 'prop-types'
import {
  MovieWrapper,
  FavoriteIcon,
  ImageWrapper,
  MovieInfo,
  MovieTitle,
  MovieRelease
} from './styled'
import Placeholder from '../../assets/images/placeholder.jpg'

const MovieCard = props => {
  const { movie } = props

  return (
    <MovieWrapper>
      <FavoriteIcon>
        <svg enable-background="new 0 0 50 50" height="50px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="50px" space="preserve" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><rect fill="none" height="50" width="50"/><polygon fill="none" points="25,3.553 30.695,18.321 46.5,19.173   34.214,29.152 38.287,44.447 25,35.848 11.712,44.447 15.786,29.152 3.5,19.173 19.305,18.321 " stroke="#000000" stroke-miterlimit="10" stroke-width="2"/></svg>
      </FavoriteIcon>
      <ImageWrapper>
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : Placeholder}
          alt={movie.Title}
        />
      </ImageWrapper>
      <MovieInfo>
        <MovieTitle>{movie.Title}</MovieTitle>
        <MovieRelease>{movie.Year}</MovieRelease>
      </MovieInfo>
    </MovieWrapper>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.object
}

export default MovieCard
