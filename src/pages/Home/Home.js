import React from 'react'
import { SearchBar } from '../../components'
import { Section, MainTitle } from './styled'

const Home = () => {
  return (
    <Section>
      <MainTitle>
        Movie Finder
      </MainTitle>
      <SearchBar />
    </Section>
  )
}

export default Home
