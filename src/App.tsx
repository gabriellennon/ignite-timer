import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globa';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>Teste</h1>
    </ThemeProvider>
  )
}
