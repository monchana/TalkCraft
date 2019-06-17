import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'

import { HomePage, YesNoMainPage, DebateMainPage, RankMainPage,
          YesNoDetailPage, DebateDetailPage, YesNoWritePage}
from 'components'

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/yesno-main" component={YesNoMainPage} exact />
        <Route path="/yesno-detail/:yesnoId" component={YesNoDetailPage} exact />
        <Route path="/debate-main" component={DebateMainPage} exact />
        <Route path="/debate-detail" component={DebateDetailPage} exact />
        <Route path="/rank-main" component={RankMainPage} exact />
        <Route path="/yesno-write" component={YesNoWritePage} exact />
      </Switch>
    </ThemeProvider>
  )
}

export default App
