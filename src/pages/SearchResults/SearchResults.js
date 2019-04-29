import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import qs from 'query-string'
import { MoviesList, Loader, LoadMore } from '../../components'

const SearchResults = props => {
  // Current page state
  const [page, setPage] = useState(1)

  // Movies array state
  const [movies, setMovies] = useState([])

  // Loading state
  const [loading, setLoading] = useState(true)

  // Load More state
  const [loadMore, setLoadMore] = useState(false)

  // Load more button state
  const [showLoadMore, setShowLoadMore] = useState(false)

  // Movie query
  const query = qs.parse(props.history.location.search)

  useEffect(() => {
    // API Call
    const fetchMovies = async () => {
      await axios.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${query.title}&page=${page}`)
        .then((response) => {
          // Concat results so load more works
          setMovies(movies => movies.concat(response.data.data))
          setShowLoadMore(response.data.total_pages > page)
        })
        .catch(function (error) {
          console.log(error)
        })
        .then(() => {
          setLoading(false)
          setLoadMore(false)
        })
    }

    fetchMovies()
  }, [page, query.title])

  const handlePageChange = () => {
    setLoadMore(true)
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
          {showLoadMore && (
            <LoadMore click={handlePageChange} loading={loadMore} />
          )}
        </>
      )}
    </div>
  )
}

SearchResults.propTypes = {
  history: PropTypes.object
}

export default withRouter(SearchResults)
