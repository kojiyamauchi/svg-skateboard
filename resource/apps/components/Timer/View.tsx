/*
  Timer / View
*/

import React from 'react'
import styled from 'styled-components'
import { breakPoint } from '@/styles/StyleMixins'

type Props = {
  className?: string
  stateOver: boolean
  stateSecond: number
}

const TimerComponent: React.FC<Props> = ({ className, stateOver, stateSecond }): JSX.Element => (
  <div className={`${className} ${stateOver ? 'is-over' : ''}`}>
    <p className="letter">
      <span className="heading">TIME</span>
      00:{stateSecond.toString().padStart(2, '0')}
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
    ${breakPoint.largeMobile` font-size: 3rem; `}
  }
`

export const Timer = StyledComponent
