import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { MoviesList, Loader, LoadMore } from '../../components'

const Favorites = () => {
  // Current page state
  const [page, setPage] = useState(1)

  // Movies array state
  const [movies, setMovies] = useState([])

  // Loading state
  const [loading, setLoading] = useState(true)

  const favoriteMovies = JSON.parse(localStorage.getItem('favorites')) || []

  useEffect(() => {
    const fetchMovieData = id => {
      axios.get(`https://jsonmock.hackerrank.com/api/movies/search/?imdbID=${id}`)
        .then((response) => {
          // Concat results so load more works
          setMovies(movies => movies.concat(response.data.data))
        })
        .catch(function (error) {
          console.log(error)
        })
        .then(() => {
          setLoading(false)
        })
    }

    if (favoriteMovies.length === 0) {
      setLoading(false)
    }

    favoriteMovies.map((movieId) => {
      return fetchMovieData(movieId)
    })
  }, [page])

  const handlePageChange = () => {
    setPage(page + 1)
  }

  return (
    <div style={{ margin: 'auto' }}>
      {loading && (
        <Loader />
      )}
      {!loading && (
        <>
          <MoviesList movies={movies} />
        </>
      )}
    </div>
  )
}

export default Favorites
