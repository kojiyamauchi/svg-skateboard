/*
  Global Styles. ( Reset & Default Setting )
*/

// Import Styled Components.
import { createGlobalStyle } from 'styled-components'
// Import Style Variables.
import * as styleVariables from '@/styles/StyleVariables'
import bomb from '@/materials/images/bomb.png'

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyle = createGlobalStyle`
  @import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,900);
  @import url(https://fonts.googleapis.com/css?family=Lobster);
  @import url(https://fonts.googleapis.com/earlyaccess/notosansjapanese.css);

  html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary, time, mark, audio, video {
    font-family: ${styleVariables.GLOBAL_FONT};
    color: ${styleVariables.GLOBAL_COLOR};
    font-size: 100%;
    font-weight: normal;
    font-style: normal;
    letter-spacing: 0;
    line-height: 1;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    border: 0;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -ms-box-sizing: border-box;
  }

  html {
    width: 100vw;
    height: 100%;
    font-size: 62.5%;
    cursor: url(${bomb}) 25 25, auto;
  }

  body {
    width: 100%;
    background: #fff;
    position: relative;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  strong {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: inherit;
    background: transparent;
  }

  a:active,
  a:hover,
  a:link,
  a:visited {
    text-decoration: none;
    color: inherit;
    outline: none;
  }

  a.current {}

  img {
    vertical-align: middle;
  }

  li,
  ol,
  ul {
    list-style-type: none;
  }

  table {
    table-layout: fixed;
    border-spacing: 0;
    border-collapse: collapse;
  }

  input[type="button"],
  input[type="submit"],
  input[type="text"],
  select,
  button {
    border-radius: 0;
    -webkit-appearance: none;
  }

  textarea {
    resize: vertical;
    border-radius: 0;
    -webkit-appearance: none;
  }

  ::selection {
    background: rgba();
  }

  ::-moz-selection {
    background: rgba();
  }

  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    * {}
  }

  @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: .001dpcm) {
    * {}
  }

  @-moz-document url-prefix() {
    * {}
  }

  @media all and (-ms-high-contrast: none) {
    * {}
  }
`
