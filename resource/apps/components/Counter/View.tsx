/*
  Counter / View
*/

import React from 'react'
import styled from 'styled-components'
import { breakPoint } from '@/styles/StyleMixins'
import LogoSneaker from '@/materials/images/logoSneaker.png'

type Props = {
  className?: string
  stateOver: boolean
  stateCount: number
}

const CounterComponent: React.FC<Props> = ({ className, stateOver, stateCount }): JSX.Element => (
  <div className={`${className} ${stateOver ? 'is-over' : ''}`}>
    <p className="letter">
      <span className="count">{stateCount}</span>
      <span className="display-mobile">&nbsp;Bomb!!</span>
      <span className="display-desktop">&nbsp;Skateboard!!💣</span>
    </p>
    <img src={LogoSneaker} className="img-logo"></img>
  </div>
)

const StyledComponent = styled(CounterComponent)`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10000000000000;

  &.is-over {
    filter: blur(5px);
    transition: filter 0.5s ease-out;
  }

  .img-logo {
    width: 90px;
    ${breakPoint.largeMobile` width: 150px; `}
  }

  .letter {
    font-size: 2.4em;
    padding: 0 0 0 5px;
    ${breakPoint.largeMobile` font-size: 3em; `}
    ${breakPoint.largeMobile` padding: 0 0 0 8px; `}
  }

  .count {
    font-size: 4rem;
    ${breakPoint.largeMobile` font-size: 5rem; `}
  }

  .display-mobile {
    display: inline;
    ${breakPoint.largeMobile` display: none; `}
  }

  .display-desktop {
    display: none;
    ${breakPoint.largeMobile` display: inline; `}
  }
`

export const Counter = StyledComponent
