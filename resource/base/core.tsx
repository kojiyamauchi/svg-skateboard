/*
  Core.
*/

import React from 'react'
import ReactDOM from 'react-dom'
import { App } from '@/App'
import { GlobalStyle } from '@/styles/StyleGlobal'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const render = (_component: React.FunctionComponent): void => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('app')
  )
}

render(App)

/*
Hot Module Replacement on Webpack Dev Sever.
https://webpack.js.org/api/hot-module-replacement/
*/
if (module.hot) {
  // dependencies (First Arg) is Either a String or an Array of Strings.
  const addDependencies = (App as unknown) as string[]
  module.hot.accept(addDependencies, (): void => render(App))
}
