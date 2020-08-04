/*
  Timer / View
*/

import * as React from 'react'
import styled from 'styled-components'
import * as styleMixins from '@/styles/StyleMixins'

type Props = {
  stateSecond: number
  stateOver: boolean
  className?: string
}

const TimerComponent: React.FC<Props> = (props): JSX.Element => (
  <div className={`${props.className} ${props.stateOver ? 'is-over' : ''}`}>
    <p className="letter">
      <span className="heading">TIME</span>
      00:{props.stateSecond.toString().padStart(2, '0')}
    </p>
  </div>
)

const StyledComponent = styled(TimerComponent)`
  position: fixed;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);

  &.is-over {
    filter: blur(5px);
    transition: filter 0.5s ease-out;
  }

  .letter {
    font-size: 4em;
    text-align: center;
  }

  .heading {
    font-size: 2.4rem;
    display: inline-block;
    width: 100%;
    ${styleMixins.breakPoint.largeMobile` font-size: 3rem; `}
  }
`

export const Timer = StyledComponent
