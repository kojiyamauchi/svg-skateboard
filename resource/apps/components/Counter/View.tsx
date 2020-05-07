/*
  Counter / View
*/

import * as React from 'react'
import styled from 'styled-components'
import * as styleMixins from '@/styles/StyleMixins'
import LogoSneaker from '@/materials/images/logoSneaker.png'

const Wrapper = styled.div`
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
    ${styleMixins.breakPoint.largeMobile` width: 150px; `}
  }
  .letter {
    font-size: 2.4em;
    padding: 0 0 0 5px;
    ${styleMixins.breakPoint.largeMobile` font-size: 3em; `}
    ${styleMixins.breakPoint.largeMobile` padding: 0 0 0 8px; `}
  }
  .count {
    font-size: 4rem;
    ${styleMixins.breakPoint.largeMobile` font-size: 5rem; `}
  }
  .display-mobile {
    display: inline;
    ${styleMixins.breakPoint.largeMobile` display: none; `}
  }
  .display-desktop {
    display: none;
    ${styleMixins.breakPoint.largeMobile` display: inline; `}
  }
`

type Props = {
  stateCount: number
  stateOver: boolean
}

const Counter: React.FC<Props> = (props): JSX.Element => {
  return (
    <Wrapper className={props.stateOver ? 'is-over' : ''}>
      <p className="letter">
        <span className="count">{props.stateCount}</span>
        <span className="display-mobile">&nbsp;Bomb!!</span>
        <span className="display-desktop">&nbsp;Skateboard!!💣</span>
      </p>
      <img src={LogoSneaker} className="img-logo"></img>
    </Wrapper>
  )
}

export default Counter
