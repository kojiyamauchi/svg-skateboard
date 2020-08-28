/*
  Mixins for Style.
*/

// Import Styled Components.
import { css } from 'styled-components'

// Import Style Variables.
import { BREAK_POINT_WIDTH } from '@/styles/StyleVariables'

// Break Point.
/*
Usage.
Small Mobile.  => ${styleMixins.breakPoint.smallMobile` Add CSS Property `}
Mobile.        => ${styleMixins.breakPoint.mobile` Add CSS Property `}
Large Mobile.  => ${styleMixins.breakPoint.largeMobile` Add CSS Property `}
Tablet.        => ${styleMixins.breakPoint.tablet` Add CSS Property `}
Desktop.       => ${styleMixins.breakPoint.desktop` Add CSS Property `}
Large Desktop. => ${styleMixins.breakPoint.largeDesktop` Add CSS Property `}
*/
export const breakPoint = Object.keys(BREAK_POINT_WIDTH).reduce((accumulator, current): BreakPointMember => {
  const breakPointKey = current as keyof BreakPointWidthMember
  accumulator[breakPointKey] = (args: TemplateStringsArray) => css`
    @media (min-width: ${BREAK_POINT_WIDTH[breakPointKey]}px) {
      ${css(args)};
    }
  `
  return accumulator
}, {} as BreakPointMember)

// Pages Mixins.
export const pagesStyle = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-repeat: no-repeat;
  background-size: 25% auto;
  background-position: 80% center;
`

// Pages Heading Mixins.
export const HeadingsPage = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 3em;
    font-weight: 300;
    transform: translateY(-100%);
    ${breakPoint.largeMobile` font-size: 4.8em `}
  }
`

// Flex Center. (Utilities)
export const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

// Flex Horizontal Space Between. (Utilities)
export const FlexHorizontalBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

// Flex Horizontal Flex Start. (Utilities)
export const FlexHorizontalStart = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

// Flex Horizontal Flex End. (Utilities)
export const FlexHorizontalEnd = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
