import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import qs from 'query-string'
import { MoviesList, Loader } from '../../components'

const SearchResults = props => {
  // Current page state
  const [page, setPage] = useState(1)

  // Movies array state
  const [movies, setMovies] = useState([])

  // Loading state
  const [loading, setLoading] = useState(true)

  // Movie query
  const query = qs.parse(props.history.location.search)

  useEffect(() => {
    // API Call
    const fetchMovies = async () => {
      await axios.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${query.title}&page=${page}`)
        .then((response) => {
          // Concat results so load more works
          setMovies(movies.concat(response.data.data))
        })
        .catch(function (error) {
          console.log(error)
        })
        .then(() => {
          setLoading(false)
        })
    }

    fetchMovies()
  }, [page])

  const handlePageChange = () => {
    setPage(page + 1)
  }

  return (
    <div style={{ height: '100%' }}>
      {loading && (
        <Loader />
      )}
      {!loading && (
        <MoviesList movies={movies} />
      )}
    </div>
  )
}

SearchResults.propTypes = {
  history: PropTypes.object
}

export default withRouter(SearchResults)
