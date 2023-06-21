import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyle } from './styles/globa'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { CycleContextProver } from './contexts/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CycleContextProver>
          <Router />
        </CycleContextProver>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
