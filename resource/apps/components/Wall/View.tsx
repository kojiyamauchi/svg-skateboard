/*
  Wall / View
*/

import * as React from 'react'
import styled from 'styled-components'
import * as styleMixins from '@/styles/StyleMixins'
import gitHub from '@/materials/images/github.svg'

type Props = {
  stateCount: number
  stateOver: boolean
  className?: string
}

const WallComponent: React.FC<Props> = (props): JSX.Element => {
  const reset = (): void => location.reload()
  // const addBlock = (): JSX.Element[] => Array.from(new Array(10), (_info, index): JSX.Element => <div className="block" key={index}></div>)
  return (
    <div className={`${props.className} ${props.stateOver ? 'is-active' : ''}`}>
      <div className="inner">
        <p className="letter">FINISH!!!</p>
        <p className="score">
          SCORE&apos;S&nbsp;
          <span className="number">{props.stateCount}</span>
        </p>
        <button className="button-replay" onClick={reset}>
          REPLAY
        </button>
        <a href="https://github.com/kojiyamauchi/svg-skateboard" className="back"></a>
      </div>
      {/* addBlock() */}
    </div>
  )
}

const StyledComponent = styled(WallComponent)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: -100vh;
  left: 0;
  z-index: 10000000000001;
  cursor: default;

  .inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .letter {
    font-family: arial, sans-serif;
    font-size: 4em;
    display: inline-block;
    ${styleMixins.breakPoint.largeMobile` font-size: 6em; `}
  }

  .score {
    font-family: arial, sans-serif;
    font-size: 4em;
    display: inline-block;
    margin: -2px 0 20px 0;
    ${styleMixins.breakPoint.largeMobile` font-size: 5em; `}
  }

  .number {
    font-size: 7.5rem;
    display: inline-block;
    ${styleMixins.breakPoint.largeMobile` font-size: 10rem; `}
    opacity: 0;
    transform: translateY(-20px);
  }

  .button-replay {
    color: #fff;
    font-family: arial, sans-serif;
    font-size: 2em;
    background-color: #777;
    border: solid 1px #aaa;
    border-radius: 6px;
    padding: 2px 46px;
    margin: 0 0 20px 0;
    cursor: pointer;
    ${styleMixins.breakPoint.largeMobile` font-size: 3em; `}
    ${styleMixins.breakPoint.largeMobile` padding: 4px 54px; `}
    ${styleMixins.breakPoint.largeMobile` margin: 0 0 30px 0; `}
  }

  .back {
    width: 29px;
    height: 29px;
    background-image: url(${gitHub});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    ${styleMixins.breakPoint.largeMobile` width: 44px `}
    ${styleMixins.breakPoint.largeMobile` height: 44px; `}
  }

  .block {
    width: 100%;
    height: 10vh;
  }

  &.is-active {
    top: 0;
    transition: top 0.5s ease-out;

    .number {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.75s ease-out 0.5s;
    }
  }
`

export const Wall = StyledComponent
