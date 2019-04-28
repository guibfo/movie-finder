import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import qs from 'query-string'
import { MoviesList } from '../../components'

const SearchResults = props => {
  // Current page state
  const [page, setPage] = useState(1)

  // Movies array state
  const [movies, setMovies] = useState([])

  // Loading state
  const [loading, setLoading] = useState(false)

  // Movie query
  const query = qs.parse(props.history.location.search)

  useEffect(() => {
    // API Call
    const fetchMovies = async () => {
      setLoading(true)
      await axios.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${query.title}&page=${page}`)
        .then((response) => {
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
    <>
      <div>
        <MoviesList movies={movies} />
      </div>
    </>
  )
}

SearchResults.propTypes = {
  history: PropTypes.object
}

export default withRouter(SearchResults)
