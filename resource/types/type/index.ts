type BreakPointWidthMember = {
  readonly smallMobile: number
  readonly mobile: number
  readonly largeMobile: number
  readonly tablet: number
  readonly desktop: number
  readonly largeDesktop: number
}

type BreakPointMember = {
  smallMobile: Function
  mobile: Function
  largeMobile: Function
  tablet: Function
  desktop: Function
  largeDesktop: Function
}
