import styled, { css } from 'styled-components'

export const MovieWrapper = styled.li`
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(34, 34, 34, 0.2);
  margin: 0 16px 32px;
  max-width: 100%;
  position: relative;
  transition: all 0.2s ease-in-out;
  width: 300px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    transform: scale(1.05);
  }
`

export const FavoriteIcon = styled.div`
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 15px;

  svg {
    height: 25px;
    width: 25px;

    polygon {
      fill: #ffffff;
      transition: all 0.2s ease-in-out;
    }

    &:hover polygon {
      fill: #ffff00;
    }
  }

  ${props => props.favorite && css`
    svg polygon {
      fill: #ffff00;
    }
  `}
`

export const ImageWrapper = styled.div`
  background: #cccccc;
  height: 400px;
  overflow: hidden;
`

export const MovieInfo = styled.div`
  padding: 12px 16px;
`

export const MovieTitle = styled.h2`
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const MovieRelease = styled.div`
  color: #919191;
  font-size: 14px;
`
