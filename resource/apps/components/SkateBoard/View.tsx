/*
  SkateBoard / View
*/

import * as React from 'react'
import styled from 'styled-components'
import * as styleMixins from '@/styles/StyleMixins'
import fire from '@/materials/images/fire.png'
import skateboardBG from '@/materials/images/skateboard_bg.svg'
import skateboardBlack from '@/materials/images/skateboard_black.svg'
import skateboardBlue from '@/materials/images/skateboard_blue.svg'
import skateboardGray from '@/materials/images/skateboard_gray.svg'
import skateboardGreen from '@/materials/images/skateboard_green.svg'
import skateboardLightBlue from '@/materials/images/skateboard_light_blue.svg'
import skateboardLightGreen from '@/materials/images/skateboard_light_green.svg'
import skateboardOrange from '@/materials/images/skateboard_orange.svg'
import skateboardPink from '@/materials/images/skateboard_pink.svg'
import skateboardPurple from '@/materials/images/skateboard_purple.svg'
import skateboardRed from '@/materials/images/skateboard_red.svg'
import skateboardWhite from '@/materials/images/skateboard_white.svg'
import skateboardYellow from '@/materials/images/skateboard_yellow.svg'
import { skateBoarders, resolvedPromise, glideCore } from '@/components/SkateBoard/Logic'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  &.is-over {
    filter: blur(5px);
    transition: filter 0.5s ease-out;
  }
  .skateboard {
    width: 100px;
    height: 52px;
    position: absolute;
    ${styleMixins.breakPoint.largeMobile` width: 150px; `}
    ${styleMixins.breakPoint.largeMobile` height: 78px; `}
    &:hover {
      cursor: url(${fire}) 25 25, auto;
    }
    &:before {
      content: ' ';
      display: block;
      width: 100px;
      height: 52px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      ${styleMixins.breakPoint.largeMobile` width: 150px; `}
      ${styleMixins.breakPoint.largeMobile` height: 78px; `}
    }
    &:after {
      content: ' ';
      display: block;
      width: 100px;
      height: 52px;
      background-image: url(${skateboardBG});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      position: absolute;
      top: 3px;
      right: 9px;
      z-index: 0;
      filter: blur(1px);
      ${styleMixins.breakPoint.largeMobile` width: 150px; `}
      ${styleMixins.breakPoint.largeMobile` height: 78px; `}
    }
    &.is-black {
      &:before {
        background-image: url(${skateboardBlack});
      }
    }
    &.is-blue {
      &:before {
        background-image: url(${skateboardBlue});
      }
    }
    &.is-gray {
      &:before {
        background-image: url(${skateboardGray});
      }
    }
    &.is-green {
      &:before {
        background-image: url(${skateboardGreen});
      }
    }
    &.is-light-blue {
      &:before {
        background-image: url(${skateboardLightBlue});
      }
    }
    &.is-light-green {
      &:before {
        background-image: url(${skateboardLightGreen});
      }
    }
    &.is-orange {
      &:before {
        background-image: url(${skateboardOrange});
      }
    }
    &.is-pink {
      &:before {
        background-image: url(${skateboardPink});
      }
    }
    &.is-purple {
      &:before {
        background-image: url(${skateboardPurple});
      }
    }
    &.is-red {
      &:before {
        background-image: url(${skateboardRed});
      }
    }
    &.is-white {
      &:before {
        background-image: url(${skateboardWhite});
      }
    }
    &.is-yellow {
      &:before {
        background-image: url(${skateboardYellow});
      }
    }
    &.is-bomb {
      &:before,
      &:after {
        transform: scale(0);
        transition: transform 0.65s ease-in;
      }
    }
  }
`

type Props = {
  fn: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  stateOver: boolean
}

const { useState, useEffect } = React

const SkateBoard: React.FC<Props> = (props): JSX.Element => {
  const [glidingState, setGlidingState] = useState<boolean>(false)

  useEffect((): void => {
    setGlidingState(true)
    skateBoarders.map(
      async (info, index): Promise<void> => {
        if (!info.glidingSelf) {
          await resolvedPromise((info.glidingSelf = true))
          glideCore(index, `.${skateBoarders[index].class}`, setGlidingState)
        }
      }
    )
  }, [glidingState])

  const setSkateBoard = (): JSX.Element[] => {
    return skateBoarders.map(
      (info): JSX.Element => {
        return <div className={`skateboard ${info.class}`} key={info.id} onClick={props.fn}></div>
      }
    )
  }

  return <Wrapper className={props.stateOver ? 'is-over' : ''}>{setSkateBoard()}</Wrapper>
}

export default SkateBoard
