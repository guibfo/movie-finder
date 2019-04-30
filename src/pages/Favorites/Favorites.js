import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { chunk } from 'lodash'
import {
  MoviesList,
  Loader,
  LoadMore,
  SearchBar
} from '../../components'

const Favorites = () => {
  // Current page state
  const [page, setPage] = useState(0)

  // Movies array state
  const [movies, setMovies] = useState([])

  // Loading state
  const [loading, setLoading] = useState(true)

  // Load More state
  const [loadMore, setLoadMore] = useState(false)

  const favoriteMovies = JSON.parse(localStorage.getItem('favorites')) || []

  // Split favorited movies in chunks of 10
  const arrayChunks = chunk(favoriteMovies, 10)

  useEffect(() => {
    if (favoriteMovies.length === 0) {
      setLoading(false)
    } else {
      // Gets the first chunk of 10 favorites on component load
      fetchFavoriteChunk(page)
    }
  }, [page])

  const fetchMovieData = (id, isLast) => {
    axios.get(`https://jsonmock.hackerrank.com/api/movies/search/?imdbID=${id}`)
      .then((response) => {
        // Concat results so load more works
        setMovies(movies => movies.concat(response.data.data))
      })
      .catch(function (error) {
        console.log(error)
      })
      .then(() => {
        if (isLast) {
          setLoading(false)
          setLoadMore(false)
        }
      })
  }

  const handleLoadMore = () => {
    setPage(page => page + 1)
    setLoadMore(true)
  }

  const fetchFavoriteChunk = chunk => {
    arrayChunks[chunk].map((movieId, index) => {
      const isLast = arrayChunks[chunk].length === index + 1
      return fetchMovieData(movieId, isLast)
    })
  }

  // Checks if loadmore button should be shown
  const showLoadMore = arrayChunks.length > page + 1

  return (
    <div style={{ margin: 'auto'}}>
      <SearchBar alt />
      {loading && (
        <Loader />
      )}
      {!loading && (
        <>
          <MoviesList movies={movies} />
          {showLoadMore && (
            <LoadMore click={handleLoadMore} loading={loadMore} />
          )}
        </>
      )}
    </div>
  )
}

export default Favorites
