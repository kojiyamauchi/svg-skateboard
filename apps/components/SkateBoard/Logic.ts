/*
  SkateBoard / Logic
*/
import { TweenMax } from 'gsap'

const skateBoarders = [
  { id: 1, class: 'is-black', glidingSelf: false },
  { id: 2, class: 'is-blue', glidingSelf: false },
  { id: 3, class: 'is-gray', glidingSelf: false },
  { id: 4, class: 'is-green', glidingSelf: false },
  { id: 5, class: 'is-light-blue', glidingSelf: false },
  { id: 6, class: 'is-light-green', glidingSelf: false },
  { id: 7, class: 'is-orange', glidingSelf: false },
  { id: 8, class: 'is-pink', glidingSelf: false },
  { id: 9, class: 'is-purple', glidingSelf: false },
  { id: 10, class: 'is-red', glidingSelf: false },
  { id: 11, class: 'is-white', glidingSelf: false },
  { id: 12, class: 'is-yellow', glidingSelf: false }
]

const values = {
  skateBoardWidth: 0,
  skateBoardHeight: 0,
  skateBoardDiagonalDiff: 0,
  skateBoardShadow: -6
}

const rotate: readonly number[] = [0, 45, 90, 135, 180, 225, 270, 315]

const easing: readonly string[] = ['Power0.easeNone', 'Power0.easeNone', 'Power0.easeNone', 'Power1.easeOut', 'Power4.easeOut', 'Sine.easeOut', 'SlowMo.ease']

const deviceWidth = (): boolean => {
  /* true -> Mobile.
     false -> LapTop
  */
  return window.innerWidth < 768
}

const resolvedPromise = <T>(arg: T): Promise<T> => {
  return new Promise((resolve): void => resolve(arg))
}

// @ts-ignore TS6133
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sleep = (ms: number): Promise<number> => {
  return new Promise((resolve): number => {
    return setTimeout(resolve, ms)
  })
}

const generateRotate = (): number => {
  return rotate[Math.floor(Math.random() * rotate.length)]
}

const generateDelayValue = (): number => {
  return Math.random() * 5 // TODO. Currently, 0 <= 5 (Include decimal)
}

const generateRandomValue = (lower: number, upper: number): number => {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower
}

const generateEasing = (): string => {
  return easing[Math.floor(Math.random() * easing.length)]
}

const generateHorizontal = (initializeRotate: {}): number => {
  const origin = {
    leftEnd: -values.skateBoardWidth!,
    rightEnd: window.innerWidth,
    verticalRange: deviceWidth() ? 50 : 200,
    diagonalRange: deviceWidth() ? 100 : 300
  }
  /* eslint-disable */
  return initializeRotate === rotate[0]
    ? origin.leftEnd
    : initializeRotate === rotate[1] || initializeRotate === rotate[7]
    ? generateRandomValue(origin.leftEnd + values.skateBoardDiagonalDiff!, origin.rightEnd - origin.diagonalRange)
    : initializeRotate === rotate[2] || initializeRotate === rotate[6] // 90deg or 270deg.
    ? generateRandomValue(origin.verticalRange, origin.rightEnd - origin.verticalRange)
    : initializeRotate === rotate[3] || initializeRotate === rotate[5] // 135deg or 225deg.
    ? generateRandomValue(origin.diagonalRange, origin.rightEnd - values.skateBoardDiagonalDiff!)
    : initializeRotate === rotate[4] // 180deg.
    ? origin.rightEnd
    : 0
  /* eslint-enable */
}

const generateVertical = (initializeRotate: {}, initializeHorizontal: {}): number => {
  const origin = {
    leftEnd: -values.skateBoardWidth!,
    rightEnd: window.innerWidth,
    bottomEnd: window.innerHeight,
    horizontalRange: 125,
    topRightAngleDiff: -(values.skateBoardWidth! - (values.skateBoardWidth! - values.skateBoardHeight!) / 2),
    topDiagonalDiff: -(values.skateBoardWidth! - ((values.skateBoardWidth! - values.skateBoardHeight!) / 2 + values.skateBoardDiagonalDiff!)),
    bottomRightAngleDiff: window.innerHeight + (values.skateBoardWidth! - values.skateBoardHeight!) / 2,
    bottomDiagonalDiff: window.innerHeight + ((values.skateBoardWidth! - values.skateBoardHeight!) / 2 - values.skateBoardDiagonalDiff!)
  }
  /* eslint-disable */
  return initializeRotate === rotate[0] || initializeRotate === rotate[4] // 0deg or 180deg.
    ? generateRandomValue(origin.horizontalRange, origin.bottomEnd - origin.horizontalRange)
    : initializeRotate === rotate[1] // 45deg.
    ? initializeHorizontal === origin.leftEnd + values.skateBoardDiagonalDiff!
      ? generateRandomValue(origin.horizontalRange, origin.bottomEnd - origin.horizontalRange)
      : origin.topDiagonalDiff
    : initializeRotate === rotate[2] // 90deg.
    ? origin.topRightAngleDiff
    : initializeRotate === rotate[3] // 135deg.
    ? initializeHorizontal === origin.rightEnd - values.skateBoardDiagonalDiff!
      ? generateRandomValue(origin.horizontalRange, origin.bottomEnd - origin.horizontalRange)
      : origin.topDiagonalDiff
    : initializeRotate === rotate[5] // 225deg.
    ? initializeHorizontal === origin.rightEnd - values.skateBoardDiagonalDiff!
      ? generateRandomValue(origin.horizontalRange, origin.bottomEnd - origin.horizontalRange)
      : origin.bottomDiagonalDiff
    : initializeRotate === rotate[6] // 270deg.
    ? origin.bottomRightAngleDiff
    : initializeRotate === rotate[7] // 315deg.
    ? initializeHorizontal === origin.leftEnd + values.skateBoardDiagonalDiff!
      ? generateRandomValue(origin.horizontalRange, origin.bottomEnd - origin.horizontalRange)
      : origin.bottomDiagonalDiff
    : 0
  /* eslint-enable */
}

const generateDurationValue = (initializeRotate: {}, lower: number, upper: number, lower2: number, upper2: number): number => {
  return initializeRotate === rotate[0] || initializeRotate === rotate[2] || initializeRotate === rotate[4] || initializeRotate === rotate[6]
    ? Math.random() * (upper - lower) + lower
    : Math.random() * (upper2 - lower2) + lower2
}

const generateTranslateX = (initializeRotate: {}): number => {
  const transition = {
    x: window.innerWidth,
    objWidth: values.skateBoardWidth,
    objectShadow: values.skateBoardShadow,
    none: 0
  }
  /* eslint-disable */
  return initializeRotate === rotate[0] // 0deg.
    ? transition.x + transition.objWidth! + transition.objectShadow
    : initializeRotate === rotate[1] || initializeRotate === rotate[7] // 45deg or 315deg.
    ? transition.x
    : initializeRotate === rotate[2] || initializeRotate === rotate[6] // 90deg or 270deg.
    ? transition.none
    : initializeRotate === rotate[3] || initializeRotate === rotate[5] // 135deg or 225deg.
    ? -transition.x
    : initializeRotate === rotate[4] // 180deg.
    ? -(transition.x + transition.objWidth! + transition.objectShadow)
    : 0
  /* eslint-enable */
}

const generateTranslateY = (initializeRotate: {}): number => {
  const transition = {
    x: window.innerWidth,
    y: window.innerHeight,
    objWidth: values.skateBoardWidth,
    objectShadow: values.skateBoardShadow,
    none: 0
  }
  /* eslint-disable */
  return initializeRotate === rotate[0] || initializeRotate === rotate[4] // 0deg or 180deg.
    ? transition.none
    : initializeRotate === rotate[1] || initializeRotate === rotate[3] // 45deg or 135deg.
    ? transition.x
    : initializeRotate === rotate[2] // 90deg.
    ? transition.y + transition.objWidth! + transition.objectShadow
    : initializeRotate === rotate[5] || initializeRotate === rotate[7] // 225deg or 315deg
    ? -transition.x
    : initializeRotate === rotate[6] // 270deg.
    ? -(transition.y + transition.objWidth! + transition.objectShadow)
    : 0
  /* eslint-enable */
}

const glideCore = async (index: number, selector: string, hooksFn: (value: React.SetStateAction<boolean>) => void): Promise<void> => {
  await resolvedPromise((values.skateBoardWidth = document.querySelectorAll('.skateboard')[index].clientWidth))
  await resolvedPromise((values.skateBoardHeight = document.querySelectorAll('.skateboard')[index].clientHeight))
  await resolvedPromise((values.skateBoardDiagonalDiff = 9)) // TODO. Not yet SP.
  await resolvedPromise(
    (values.skateBoardShadow = Number(
      window
        .getComputedStyle(document.querySelectorAll('.skateboard')[index], ':after')
        .getPropertyValue('left')
        .slice(1)
        .slice(0, -2)
    ))
  )
  const initializeRotate = await resolvedPromise(generateRotate())
  const initializeHorizontal = await resolvedPromise(generateHorizontal(initializeRotate))
  const initializeVertical = await resolvedPromise(generateVertical(initializeRotate, initializeHorizontal))
  const durationValue = await resolvedPromise(generateDurationValue(initializeRotate, 4, 8, 10, 12))
  const translateX = await resolvedPromise(generateTranslateX(initializeRotate))
  const translateY = await resolvedPromise(generateTranslateY(initializeRotate))
  const delayValue = await resolvedPromise(generateDelayValue())
  const chooseEasing = await resolvedPromise(generateEasing())
  requestAnimationFrame((): void => {
    TweenMax.fromTo(
      selector,
      durationValue,
      {
        rotation: initializeRotate,
        left: initializeHorizontal,
        top: initializeVertical,
        visibility: 'visible',
        x: 0,
        y: 0
      },
      {
        x: translateX,
        y: translateY,
        delay: delayValue,
        ease: chooseEasing,
        onComplete: (): void => {
          document.querySelector(selector)!.classList.remove('is-bomb')
          skateBoarders[index].glidingSelf = false
          hooksFn(false)
        }
      }
    )
  })
}

const onBomb = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
  if (event.currentTarget instanceof HTMLElement) event.currentTarget!.classList.add('is-bomb')
}

export { skateBoarders, resolvedPromise, glideCore, onBomb }
